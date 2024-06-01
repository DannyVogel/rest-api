import { createClient } from "@supabase/supabase-js";
import { Database } from "~/types/database.types";

const { supabaseUrl, supabaseKey } = useRuntimeConfig();

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
