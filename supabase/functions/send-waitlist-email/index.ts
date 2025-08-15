import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
  newsletter: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, newsletter }: WaitlistRequest = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Step 1: Insert the email into the database (primary action)
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const { error: dbError } = await supabaseClient
      .from("waitlist")
      .insert({ email, newsletter });

    if (dbError) {
      console.error("Error inserting into waitlist:", dbError);
      if (dbError.code === "23505") { // Unique constraint violation
        return new Response(
          JSON.stringify({
            error: "This email address has already been registered.",
          }),
          {
            status: 409, // Conflict
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }
      // For other database errors, we should fail hard
      throw dbError;
    }

    // Step 2: Try to send the welcome email (secondary action)
    // This should not block the success response.
    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      if (!resendApiKey) {
        console.warn("RESEND_API_KEY is not set. Skipping welcome email.");
      } else {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "EtherionAI <onboarding@resend.dev>",
          to: [email],
          subject: "Welcome to the Revolution! 🚀",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1e293b; color: #ffffff; padding: 40px 20px;">
              <div style="text-align: center; margin-bottom: 40px;">
                <h1 style="color: #0027c1; font-size: 32px; margin: 0;">EtherionAI</h1>
                <h2 style="color: #ffffff; font-size: 24px; margin: 20px 0;">Welcome to the Revolution!</h2>
              </div>
              <div style="background-color: #334155; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
                <h3 style="color: #0027c1; font-size: 20px; margin-top: 0;">Your Autonomous Digital Workforce Awaits</h3>
                <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1;">Thank you for joining the waiting list!</p>
              </div>
            </div>
          `,
        });
        console.log(`Welcome email sent to ${email}`);
      }
    } catch (emailError) {
      console.error(
        `Failed to send welcome email to ${email}, but they were added to the waitlist.`,
        emailError
      );
      // Do not re-throw error, as email sending is optional.
    }

    // Return success response regardless of email sending outcome
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Critical error in waitlist function:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "An unexpected error occurred.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);