import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'; // Keep this

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  type: 'ebook' | 'booking' | 'contactForm';
  email: string;
  name?: string;
  date?: string;
  time?: string;
  formData?: Record<string, any>;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { type, email, name, date, time, formData }: EmailRequest = await req.json();

    // Prepare data for insertion
    const submissionData = {
      company_name: formData?.companyName,
      name_and_role: formData?.nameAndRole,
      email: email,
      business_description: formData?.businessDescription,
      employee_count: formData?.employeeCount,
      challenges: formData?.challenges,
      desired_outcomes: formData?.desiredOutcomes,
      urgency_scale: formData?.urgencyScale ? formData.urgencyScale[0] : null,
      current_software: formData?.currentSoftware,
      collaboration: formData?.collaboration,
      ai_experience: formData?.aiExperience,
      call_expectations: formData?.callExpectations,
      specific_questions: formData?.specificQuestions,
      raw_form_data: formData,
    };

    const { data: dbData, error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert([submissionData])
      .select();

    if (dbError) {
      console.error("Error inserting data into DB:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
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
    console.error("Error in function (send-contact-email):", error.message); // Ensure error.message is logged
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

