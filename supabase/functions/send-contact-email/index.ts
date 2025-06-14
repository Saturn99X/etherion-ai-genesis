import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'; // Keep this

// IMPORTANT: Supabase Table Schema Guide
// This function routes data to different tables based on the 'type' field in the request.
// Please ensure your Supabase tables are structured according to the schemas below:
//
// 1. Table: 'contact_submissions' (for type: 'contactForm')
//    - id: BIGINT (Primary Key, Auto-incrementing) - Handled by Supabase
//    - submitted_at: TIMESTAMPZ (Timestamp of function processing) - NOT NULL
//    - email: TEXT - NULLABLE
//    - raw_form_data: JSONB (Stores the full 'formData' object) - NULLABLE
//    - company_name: TEXT - NULLABLE
//    - name_and_role: TEXT - NULLABLE
//    - business_description: TEXT - NULLABLE
//    - employee_count: TEXT - NULLABLE
//    - challenges: TEXT - NULLABLE
//    - desired_outcomes: TEXT - NULLABLE
//    - urgency_scale: INTEGER - NULLABLE
//    - current_software: TEXT - NULLABLE
//    - collaboration: TEXT - NULLABLE
//    - ai_experience: TEXT - NULLABLE
//    - call_expectations: TEXT - NULLABLE
//    - specific_questions: TEXT - NULLABLE
//    - call_date: DATE - NULLABLE
//    - call_time: TIMESTAMPZ - NULLABLE
//
// 2. Table: 'call_bookings' (for type: 'booking')
//    - id: BIGINT (Primary Key, Auto-incrementing) - Handled by Supabase
//    - created_at: TIMESTAMPZ (Default: now()) - Handled by Supabase
//    - type: TEXT (Value: 'booking') - NOT NULL (Optional, as table name implies type)
//    - email: TEXT - Potentially NOT NULL
//    - name: TEXT - NULLABLE (Name of the person booking)
//    - submitted_at: TIMESTAMPZ (Timestamp of function processing) - NOT NULL
//    - call_date: DATE - NULLABLE (YYYY-MM-DD for the event)
//    - call_time: TIMESTAMPZ - NULLABLE (Full ISO timestamp for the event)
//
// 3. Table: 'ebook_requests' (for type: 'ebook')
//    - id: BIGINT (Primary Key, Auto-incrementing) - Handled by Supabase
//    - created_at: TIMESTAMPZ (Default: now()) - Handled by Supabase
//    - type: TEXT (Value: 'ebook') - NOT NULL (Optional, as table name implies type)
//    - email: TEXT - Potentially NOT NULL
//    - submitted_at: TIMESTAMPZ (Timestamp of function processing) - NOT NULL
//    - name: TEXT - NULLABLE (If collected for ebooks)
//
// General Recommendations:
// - Ensure all type-specific fields are NULLABLE if not always provided.
// - Consider adding indexes on frequently queried fields (e.g., 'email', 'submitted_at', 'call_date').

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

    const submittedAt = new Date().toISOString();
    let tableName = '';
    let recordToInsert: Record<string, any> = {};

    if (type === 'contactForm' && formData) {
      tableName = 'contact_submissions';
      recordToInsert = {
        // Removed `type` and `name` as they do not exist in the contact_submissions table.
        // `name_and_role` is used instead.
        email: formData.email, // email from formData
        submitted_at: submittedAt,
        raw_form_data: formData,
        company_name: formData.companyName,
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
        // Removed form_submission_date and form_submission_time as they do not exist in the table.
      };
    } else if (type === 'booking') {
      tableName = 'call_bookings';
      let callTimestamp = null;
      if (booking_date && booking_time) {
        const [hours, minutes] = booking_time.split(':');
        if (hours && minutes) {
          try {
            callTimestamp = new Date(`${booking_date}T${booking_time}:00`).toISOString();
          } catch (e) {
            console.warn('Error constructing date from booking_date and booking_time:', e, { booking_date, booking_time });
          }
        } else {
          console.warn('Could not parse booking_time:', booking_time);
        }
      }
      recordToInsert = {
        type: type, // Good to keep type for context if desired, or can be omitted if table implies type
        email: email,
        name: name, // 'name' from original payload
        submitted_at: submittedAt,
        call_date: booking_date, // YYYY-MM-DD string
        call_time: callTimestamp, // Full ISO string for timestamptz
      };
    } else if (type === 'ebook') {
      tableName = 'ebook_requests';
      recordToInsert = {
        type: type, // Good to keep type for context
        email: email,
        name: name, // Include name if available and desired for ebook requests
        submitted_at: submittedAt,
      };
    } else {
      // Handle unknown type
      console.error('Unknown form submission type:', type);
      return new Response(
        JSON.stringify({ error: `Unknown form submission type: ${type}` }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { data: dbData, error: dbError } = await supabaseClient
      .from(tableName) // Use the dynamic tableName
      .insert([recordToInsert])
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
