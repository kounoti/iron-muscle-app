"use client";

import React, { useEffect, useState } from "react";
import UserPage from "./UserPage";
import { supabase_google } from "../Authentication/SupabaseGoogle";
import { supabase } from "../../../utils/supabaseClient";

const Page: React.FC = () => {
  return (
    <>
      <UserPage />
    </>
  );
};

export default Page;
