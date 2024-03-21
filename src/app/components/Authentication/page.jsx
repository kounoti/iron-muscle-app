"use client";

import Head from "next/head";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";

const supabase_google = createClient(
  "https://vjwvrqtjtwowuxxxznoq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqd3ZycXRqdHdvd3V4eHh6bm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5NjgzMjksImV4cCI6MjAyNTU0NDMyOX0.bNNhGE_PIb2NqQh9Id-KxjzfClSw_rANLTX7cOz3iHM"
);

// supabase_googleをexportする
export { supabase_google };

export default function Authentication() {
  //   const supabase_google = createClient(
  //     "https://vjwvrqtjtwowuxxxznoq.supabase.co",
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqd3ZycXRqdHdvd3V4eHh6bm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5NjgzMjksImV4cCI6MjAyNTU0NDMyOX0.bNNhGE_PIb2NqQh9Id-KxjzfClSw_rANLTX7cOz3iHM"
  //   );

  return (
    <>
      <div className=" flex flex-col justify-center py-12 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Auth
              supabaseClient={supabase_google}
              appearance={{ theme: ThemeSupa }}
              providers={["google"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
