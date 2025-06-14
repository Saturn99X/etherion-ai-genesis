import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'; // Keep this

// IMPORTANT: Supabase Table Schema Guide for 'contact_submissions'
// This function inserts data into the 'contact_submissions' table.
// Please ensure your table schema in Supabase is compatible with the following fields and suggested types:
//
// Common Fields (for all submission types):
// - id: BIGINT (Primary Key, Auto-incrementing) - Handled by Supabase
// - created_at: TIMESTAMPZ (Default: now()) - Handled by Supabase
// - type: TEXT (e.g., 'contactForm', 'booking', 'ebook') - NOT NULL
// - email: TEXT - Potentially NOT NULL, consider constraints like IS_EMAIL
// - name: TEXT - NULLABLE
// - submitted_at: TIMESTAMPZ (Timestamp of when the function processed the submission) - NOT NULL
// - raw_form_data: JSONB (Stores the raw 'formData' object, mainly for 'contactForm', or other raw JSON payloads) - NULLABLE
//
// Fields specific to 'contactForm':
// - company_name: TEXT - NULLABLE
// - name_and_role: TEXT - NULLABLE (Contains name and role from the form)
// - business_description: TEXT - NULLABLE
// - employee_count: TEXT - NULLABLE
// - challenges: TEXT - NULLABLE
// - desired_outcomes: TEXT - NULLABLE
// - urgency_scale: INTEGER - NULLABLE (e.g., 1-10)
// - current_software: TEXT - NULLABLE
// - collaboration: TEXT - NULLABLE
// - ai_experience: TEXT - NULLABLE (Could also be BOOLEAN depending on how you want to store "Yes/No" experience)
// - call_expectations: TEXT - NULLABLE
// - specific_questions: TEXT - NULLABLE
// - form_submission_date: TEXT - NULLABLE (Date string from client, e.g., "MM/DD/YYYY" or other locale formats)
// - form_submission_time: TEXT - NULLABLE (Time string from client, e.g., "HH:MM:SS AM/PM" or other locale formats)
//
// Fields specific to 'booking':
// - call_date: DATE - NULLABLE (YYYY-MM-DD format, for the actual event date, derived from incoming 'booking_date')
// - call_time: TIMESTAMPZ - NULLABLE (Full ISO timestamp for the event, constructed from incoming 'booking_date' and 'booking_time')
//
// Fields specific to 'ebook' (Example, if extended later):
// - ebook_title: TEXT - NULLABLE
//
// Ensure that fields not applicable to all submission types are set to NULLABLE in your Supabase table.
// Consider adding appropriate indexes on frequently queried fields like 'type', 'email', or 'submitted_at'.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  type: 'ebook' | 'booking' | 'contactForm';
  email: string;
  name?: string; // Common field
  date?: string; // This seems like submission date for 'booking', less so for contactForm
  time?: string; // This seems like submission time for 'booking'
  formData?: Record<string, any>; // Specific to contactForm
  // Fields specific to booking, directly in the payload
  booking_date?: string;
  booking_time?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error("Server configuration error: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing.");
      return new Response(
        JSON.stringify({ error: "Server configuration issue. Please contact support." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const supabaseClient = createClient(
      supabaseUrl,
      supabaseServiceRoleKey
    );

    const { type, email, name, date, time, formData, booking_date, booking_time }: EmailRequest = await req.json();

    let submissionRecord: Record<string, any> = {
      type: type,
      email: email,
      name: name, // Name from booking form or extracted from contact form
      submitted_at: new Date().toISOString(),
      // Include raw_form_data if formData is present (for contactForm)
      raw_form_data: formData ? formData : null,
    };

    if (type === 'contactForm' && formData) {
      submissionRecord = {
        ...submissionRecord,
        company_name: formData.companyName,
        // Ensure 'name' from formData (nameAndRole) is prioritized if different from 'name' in root
        name_and_role: formData.nameAndRole,
        business_description: formData.businessDescription,
        employee_count: formData.employeeCount,
        challenges: formData.challenges,
        desired_outcomes: formData.desiredOutcomes,
        urgency_scale: formData.urgencyScale ? formData.urgencyScale[0] : null,
        current_software: formData.currentSoftware,
        collaboration: formData.collaboration,
        ai_experience: formData.aiExperience,
        call_expectations: formData.callExpectations,
        specific_questions: formData.specificQuestions,
        // 'date' and 'time' from contact form are for when the form was filled, not booking
        form_submission_date: date,
        form_submission_time: time,
      };
    } else if (type === 'booking') {
      let callTimestamp = null;
      if (booking_date && booking_time) {
        // Basic validation for HH:MM format might be good, but for now, assume it's correct.
        const [hours, minutes] = booking_time.split(':');
        if (hours && minutes) {
          // Create a date object. Note: This will use the server's local timezone by default
          // if no timezone information is appended. For timestamptz, it's often best to
          // construct in UTC or ensure the client sends timezone info.
          // For simplicity here, we'll combine them. Supabase timestamptz will store it in UTC.
          try {
            callTimestamp = new Date(`${booking_date}T${booking_time}:00`).toISOString();
          } catch (e) {
            console.warn('Error constructing date from booking_date and booking_time:', e, { booking_date, booking_time });
            // callTimestamp remains null if date construction fails
          }
        } else {
          console.warn('Could not parse booking_time:', booking_time);
        }
      }
      submissionRecord = {
        ...submissionRecord,
        // 'name' and 'email' are already top-level from CalendarBooking.tsx
        call_date: booking_date, // booking_date is YYYY-MM-DD, suitable for DATE type
        call_time: callTimestamp, // This is now a full ISO string for TIMESTAMPZ
        // 'date' and 'time' from booking payload are less structured, prioritize booking_date/time
        // We can store them if needed, e.g., raw_booking_payload_date: date, raw_booking_payload_time: time
      };
    } else if (type === 'ebook') {
        // Handle ebook submission fields if any, e.g.
        // submissionRecord = { ...submissionRecord, ebook_title: formData?.ebookTitle };
        // For now, just the common fields will be included for 'ebook'
    }

    const { data: dbData, error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert([submissionRecord]) // Use the dynamically built submissionRecord
      .select();

    if (dbError) {
      console.error("Error inserting data into DB:", JSON.stringify(dbError, null, 2));
      throw new Error(`Database insertion error: ${dbError.message} (Code: ${dbError.code})`);
    }

    console.log("Data inserted successfully:", dbData); // Keep this log

    return new Response(JSON.stringify({ success: true, message: "Form data submitted successfully.", submissionId: dbData?.[0]?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in function (send-contact-email):", error.message);
    return new Response(
      JSON.stringify({ error: error.message || "An unexpected error occurred." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

