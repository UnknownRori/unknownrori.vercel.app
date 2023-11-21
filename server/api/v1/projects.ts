import { serverSupabaseClient } from "#supabase/server";

import type { Database } from "~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);

  const result = await client.from("projects").select("*");

  return {
    code: result.status,
    data: result.data,
  };
});
