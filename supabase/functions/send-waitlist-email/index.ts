import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, newsletter }: WaitlistRequest = await req.json();

    // TODO: The email sending functionality is temporarily commented out.
    // This is to allow email collection to work while email sending issues are being resolved.
    // To enable email sending, you will need to:
    // 1. Ensure the `send-waitlist-email` function is correctly deployed to Supabase.
    // 2. Ensure the `RESEND_API_KEY` is set in your Supabase project's environment variables.
    // 3. Uncomment the `resend.emails.send` call below.
    //
    // const { data, error } = await resend.emails.send({
    //   from: "EtherionAI <onboarding@resend.dev>",
    //   to: [email],
    //   subject: "Welcome to the Revolution! 🚀",
    //   html: `...` // The original HTML content is omitted for brevity
    // });
    //
    // if (error) {
    //   throw new Error(`Resend error: ${error.message}`);
    // }

    console.log(`Email submission for ${email} received. Email sending is currently disabled.`);

    // Since we are not sending an email, we will just return a success response.
    // This will make the frontend show the success message.
    return new Response(JSON.stringify({ success: true, message: "Email collected. Sending disabled." }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-waitlist-email function:", error);
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