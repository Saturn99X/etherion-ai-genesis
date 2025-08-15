import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
}

interface WaitlistRequest {
  email: string
  newsletter: boolean
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { email, newsletter }: WaitlistRequest = await req.json()

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      })
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    )

    const { error } = await supabaseClient
      .from("waitlist")
      .insert({ email, newsletter })

    if (error) {
      console.error("Error inserting into waitlist:", error)
      if (error.code === '23505') { // Unique constraint violation
        return new Response(
          JSON.stringify({ error: "This email address has already been registered." }),
          {
            status: 409, // Conflict
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        )
      }
      throw error
    }

    return new Response(JSON.stringify({ success: true }), {
      
    return new Response(JSON.stringify({ success: true, message: "Email collected." }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    })
  } catch (error: any) {
    console.error("Error in add-to-waitlist function:", error)
    return new Response(
      JSON.stringify({ error: error.message || "An unexpected error occurred." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    )
  }
}

serve(handler);
