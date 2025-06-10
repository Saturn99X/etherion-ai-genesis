
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  type: 'ebook' | 'booking';
  email: string;
  name?: string;
  date?: string;
  time?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, email, name, date, time }: EmailRequest = await req.json();
    
    let subject: string;
    let htmlContent: string;

    if (type === 'ebook') {
      subject = "New Ebook Request - Etherion AI";
      htmlContent = `
        <h2>New Ebook Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>Someone has requested the free automation ebook.</p>
        <hr>
        <p>Please send them the ebook and add them to the mailing list.</p>
      `;
    } else {
      subject = "New Call Booking - Etherion AI";
      htmlContent = `
        <h2>New 15-Minute Call Booking</h2>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <hr>
        <p>Please confirm this booking and send calendar invite to the client.</p>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Etherion AI <onboarding@resend.dev>",
      to: ["sales@etherionai.com"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
