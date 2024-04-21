"use client";

import React from "react";

import { useState, useEffect } from "react";
import TimeLine, { TimeLineMemoryType } from "./TimeLine";
import { supabase } from "../../../utils/supabaseClient";

export default function Page() {
  const [timeLineMemories, setTimeLineMemories] = useState<
    TimeLineMemoryType[]
  >([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("timelineflag", true)
          .order("created_at", { ascending: true });
        // エラー以外の時にmemoriesにdataオブジェクトを格納する。
        if (error) {
          console.error("Error fetching memories:", error.message);
          return;
        }
        setTimeLineMemories(data);
      } catch (error: any) {
        console.error("Error fetching memories:", error.message);
      }
    }
    fetchData();
  }, []);

  return <TimeLine timeLineMemories={timeLineMemories} />;
}
