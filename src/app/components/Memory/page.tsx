"use client";
import React, { useEffect, useState } from "react";
import TrainingMemory, { MemoryType } from "./TrainingMemory";

import { supabase } from "../../../utils/supabaseClient";
import { supabase_google } from "../Authentication/SupabaseGoogle";
import Link from "next/link";

// import MemoryGraph from "./MemoryGraph";

// import BodyWeightChart from "./BodyWeightChart";

export default function Page() {
  const [account, setAccount] = useState<string | null>(null);

  //ログインしたユーザーのメールアドレスをuserAccountに格納する
  const getUserAccount = async () => {
    // ログインのセッションを取得する処理
    const { data } = await supabase_google.auth.getSession();
    // セッションがあるときだけ現在ログインしているユーザーを取得する
    if (data.session !== null) {
      // supabaseに用意されている現在ログインしているユーザーを取得する関数
      const {
        data: { user },
      } = await supabase_google.auth.getUser();
      // currentUserにユーザーのメールアドレスを格納
      setAccount(user?.email ?? "");
    }
    console.log("getUserAccount内");
  };

  //ページリダイレクト時にユーザーのメールアドレスをuserAccountに格納する
  useEffect(() => {
    getUserAccount();
  }, []);

  const [memories, setMemories] = useState<MemoryType[]>([]);

  //  sueEffect内で非同期処理を行うことでuse clientとasyncの衝突を防ぐ
  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("account", account)
          .order("date", { ascending: true });
        // エラー以外の時にmemoriesにdataオブジェクトを格納する。
        if (error) {
          console.error("Error fetching memories:", error.message);
          return;
        }
        setMemories(data);
      } catch (error: any) {
        console.error("Error fetching memories:", error.message);
      }
    }
    fetchData();
  }, [memories, account]);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8 text-gray-800">
        Muscle Memory
      </h1>
      <TrainingMemory memories={memories} />

      <div className="flex justify-center">
        <Link href="/components/TopPage" className="font-bold text-blue-700">
          TOPへ戻る
        </Link>
      </div>
      {/* <BodyWeightChart account={account} /> */}
    </>
  );
}
