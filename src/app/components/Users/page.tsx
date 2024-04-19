"use client";

import React, { useEffect, useState } from "react";
import UserPage from "./UserPage";
import { supabase_google } from "../Authentication/SupabaseGoogle";
import Link from "next/link";

const Page: React.FC = () => {
  const [account, setAccount] = useState<string>("");

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

  return (
    <>
      <UserPage account={account} />

      <Link
        href="/components/TimeLine"
        className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-10 px-10 rounded border-2 border-blue-400 sm:text-5xl text-2xl "
      >
        TimeLineページへ
      </Link>
    </>
  );
};

export default Page;
