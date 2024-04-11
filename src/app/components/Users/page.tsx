"use client";

import React, { useEffect, useState } from "react";
import UserPage from "./UserPage";
import { supabase_google } from "../Authentication/SupabaseGoogle";

const Page: React.FC = () => {
  const [account, setAccount] = useState<string>("");

  const [render, setRender] = useState<boolean>(true);

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

  useEffect(() => {
    setRender(false);
  }, []);

  useEffect(() => {
    if (!render) {
      setRender(true);
    }
  }, [render]);

  return (
    <>
      <UserPage account={account} />
    </>
  );
};

export default Page;
