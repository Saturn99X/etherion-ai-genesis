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

//     // Send welcome email to the user
//     const emailResponse = await resend.emails.send({
//       from: "Etherion <contact@etherionai.com>",
//       to: [email],
//       subject: "Welcome to the Revolution! 🚀",
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1e293b; color: #ffffff; padding: 40px 20px;">
//           <div style="text-align: center; margin-bottom: 40px;">
//             <h1 style="color: #0027c1; font-size: 32px; margin: 0;">EtherionAI</h1>
//             <h2 style="color: #ffffff; font-size: 24px; margin: 20px 0;">Welcome to the Revolution!</h2>
//           </div>
          
//           <div style="background-color: #334155; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
//             <h3 style="color: #0027c1; font-size: 20px; margin-top: 0;">Your Autonomous Digital Workforce Awaits</h3>
//             <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1;">
//               Thank you for joining the waiting list! You're now among the first to experience the future of work with EtherionAI.
//             </p>
//             <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1;">
//               Our team of AI agents is ready to transform how you work:
//             </p>
//             <ul style="color: #cbd5e1; font-size: 16px; line-height: 1.8;">
//               <li>🔍 <strong>Financial Analyst</strong> - Never fly blind again</li>
//               <li>🛒 <strong>E-commerce Strategist</strong> - Your 24/7 growth partner</li>
//               <li>💬 <strong>Threads Agent</strong> - Dominate the conversation</li>
//               <li>🎨 <strong>Imagen Agent</strong> - Create the unseen</li>
//               <li>🎯 <strong>Client Discovery</strong> - Find your next customer</li>
//               <li>👁️ <strong>Competitor Spy</strong> - Know their next move</li>
//             </ul>
//           </div>
          
//           <div style="background-color: #0f172a; padding: 20px; border-radius: 8px; border-left: 4px solid #0027c1;">
//             <h4 style="color: #0027c1; margin-top: 0;">What's Next?</h4>
//             <p style="color: #cbd5e1; margin-bottom: 0;">
//               We'll notify you as soon as early access opens. As a waiting list member, you'll receive:
//             </p>
//             <ul style="color: #cbd5e1; margin-bottom: 0;">
//               <li>Priority access to the platform</li>
//               <li>Bonus platform credits</li>
//               <li>Exclusive onboarding support</li>
//             </ul>
//           </div>
          
//           ${newsletter ? `
//           <div style="margin-top: 30px; text-align: center; padding: 20px; background-color: #334155; border-radius: 8px;">
//             <p style="color: #cbd5e1; margin: 0;">
//               📧 You've also subscribed to our newsletter for the latest AI automation insights and updates.
//             </p>
//           </div>
//           ` : ''}
          
//           <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #475569;">
//             <p style="color: #64748b; font-size: 14px; margin: 0;">
//               The future of work is here. Welcome aboard!<br>
//               The EtherionAI Team
//             </p>
//           </div>
//         </div>
//       `,
//     });

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
