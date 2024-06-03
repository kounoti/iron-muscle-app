// "use client";

// import { useEffect, useState } from "react";

import Authentication from "./components/Authentication/page";
import "./globals.css";
import { supabase_google } from "./components/Authentication/SupabaseGoogle";
import TopPage from "./components/TopPage/TopPageIn";
import Head from "next/head";

// import TopPage from "./components/TopPage/TopPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Iron Muscle App</title>
        <link rel="icon" href="/bear.png" />
      </Head>

      <Authentication />
    </>
  );
}
