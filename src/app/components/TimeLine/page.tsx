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
          .order("created_at", { ascending: false });
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

  // timeLineMemoriesがnullの場合、データの取得がまだ行われていないことを示す
  if (!timeLineMemories) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return <TimeLine timeLineMemories={timeLineMemories} />;
}
