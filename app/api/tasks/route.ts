import { supabase } from "@/utils/supabase/client";

export async function GET(): Promise<Response> {
  try {
    const supabaseClient = await supabase;
    const { data: tasks, error } = await supabaseClient
      .from("tasks")
      .select("*");
    return new Response(JSON.stringify({ tasks, error }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
