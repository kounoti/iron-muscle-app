import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
  },
});

const supabase_google = createClient(
  "https://vjwvrqtjtwowuxxxznoq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqd3ZycXRqdHdvd3V4eHh6bm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5NjgzMjksImV4cCI6MjAyNTU0NDMyOX0.bNNhGE_PIb2NqQh9Id-KxjzfClSw_rANLTX7cOz3iHM"
);

// supabase_googleをexportする
export { supabase_google };
