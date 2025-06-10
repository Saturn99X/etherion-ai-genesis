
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
// import { Resend } from "npm:resend@2.0.0"; // Remove
// const resend = new Resend(Deno.env.get("RESEND_API_KEY")); // Remove
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  type: 'ebook' | 'booking' | 'contactForm'; // Add 'contactForm'
  email: string;
  name?: string;
  date?: string;
  time?: string;
  formData?: Record<string, any>; // Add formData for detailed submissions
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Ensure you have SUPABASE_URL and SUPABASE_ANON_KEY or SUPABASE_SERVICE_ROLE_KEY in env
    // For functions, service_role key is typical for admin-like operations.
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL')!, // Ensure these are set in your function's env
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')! // Use service role key for backend operations
    );

    const { type, email, name, date, time, formData }: EmailRequest = await req.json();

    // Prepare data for insertion
    const submissionData = {
      company_name: formData?.companyName,
      name_and_role: formData?.nameAndRole, // Storing the full field
      email: email, // from top-level
      business_description: formData?.businessDescription,
      employee_count: formData?.employeeCount,
      challenges: formData?.challenges,
      desired_outcomes: formData?.desiredOutcomes,
      urgency_scale: formData?.urgencyScale ? formData.urgencyScale[0] : null, // Extract number from array
      current_software: formData?.currentSoftware,
      collaboration: formData?.collaboration,
      ai_experience: formData?.aiExperience,
      call_expectations: formData?.callExpectations,
      specific_questions: formData?.specificQuestions,
      raw_form_data: formData, // Store the whole formData object
      // 'type', 'name', 'date', 'time' from EmailRequest are not explicitly mapped here
      // but will be part of raw_form_data if formData contains them.
      // The 'name' from EmailRequest is the parsed one, email is top-level.
      // date & time from top level are ignored for dedicated DB columns.
    };

    const { data: dbData, error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert([submissionData])
      .select(); // .select() to get the inserted data back

    if (dbError) {
      console.error("Error inserting data into DB:", dbError);
      throw new Error(`Database error: ${dbError.message}`); // This will be caught by the main catch block
    }

    console.log("Data inserted successfully:", dbData);

    return new Response(JSON.stringify({ success: true, message: "Form data submitted successfully.", submissionId: dbData?.[0]?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in function (send-contact-email):", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
