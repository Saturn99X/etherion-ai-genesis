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
          subject: "You're on the list! Welcome to the EtherionAI Revolution.",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #cbd5e1; padding: 40px 20px; border-radius: 12px; border: 1px solid #334155;">
              <div style="text-align: center; margin-bottom: 30px;">
                <img src="https://www.etherionai.com/lovable-uploads/logo.png" alt="EtherionAI Logo" style="max-width: 150px; margin-bottom: 20px;">
                <h1 style="color: #ffffff; font-size: 28px; margin: 0;">The Revolution is Coming.</h1>
                <h2 style="color: #00aaff; font-size: 20px; margin: 10px 0;">You're at the Front of the Line.</h2>
              </div>

              <div style="background-color: #1e293b; padding: 30px; border-radius: 8px;">
                <p style="font-size: 16px; line-height: 1.6;">
                  Thank you for joining the waitlist for EtherionAI.
                </p>
                <p style="font-size: 16px; line-height: 1.6;">
                  We're not just building another tool; we're assembling a new way to work, powered by a team of autonomous AI agents ready to execute your business goals.
                </p>
                <p style="font-size: 16px; line-height: 1.6;">
                  While you wait for your priority access, we'll be sharing exclusive sneak peeks and insights into the future of work. Get ready—your digital workforce is just around the corner.
                </p>
              </div>

              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #334155;">
                <p style="color: #64748b; font-size: 14px; margin: 0;">
                  The EtherionAI Team
                </p>
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