"use client";
import React, { useEffect, useState } from "react";
import TrainingMemory from "./TrainingMemory";
import { supabase } from "src/utils/supabaseClient";

export default function Page() {
  const [memories, setMemories] = useState([]);

  //  sueEffect内で非同期処理を行うことでuse clientとasyncの衝突を防ぐ
  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("posts").select("*");
        // エラー以外の時にmemoriesにdataオブジェクトを格納する。
        if (error) {
          console.error("Error fetching memories:", error.message);
          return;
        }
        setMemories(data);
      } catch (error) {
        console.error("Error fetching memories:", error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8 text-gray-800">
        Muscle Memory
      </h1>
      <TrainingMemory memories={memories} />
      <div className="flex justify-center">
        <a href="/" className="font-bold text-blue-700">
          TOPへ戻る
        </a>
      </div>
    </>
  );
}
