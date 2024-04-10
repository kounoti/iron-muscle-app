"use client";

import React, { useEffect, useState } from "react";
import UserPage from "./UserPage";
import { supabase } from "../../../utils/supabaseClient";
import { supabase_google } from "../Authentication/SupabaseGoogle";
import Error from "next/error";

const Page: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  const [account, setAccount] = useState("");

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
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase
          .from("userInformation")
          .select("*")
          .eq("user_account", account);

        if (error) {
          throw error;
        }

        setUser(data);
      } catch (error: any) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, [account]);

  return (
    <>
      <UserPage user={user} />
    </>
  );
};

export default Page;
