"use client";

import React, { useEffect, useState } from "react";
import UserPage from "./UserPage";
import { supabase_google } from "../Authentication/SupabaseGoogle";
import { supabase } from "../../../utils/supabaseClient";

const Page: React.FC = () => {
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

      // 既に同じアカウントがUserInformationテーブルに存在するかチェック
      const { data: existingUserData, error } = await supabase
        .from("UserInformation")
        .select("account")
        .eq("account", user?.email);

      if (error) {
        console.error(
          "Error checking existing user information:",
          error.message
        );
        return;
      }

      // 同じアカウントが見つかった場合は追加しない
      if (existingUserData && existingUserData.length > 0) {
        console.log("User information already exists in UserInformation table");
        return;
      }

      // Supabaseへのデータの追加
      // ユーザー情報をUserInformationテーブルに追加する
      const { error: insertError } = await supabase
        .from("UserInformation") // UserInformationテーブルを指定
        .insert([
          {
            // 追加するデータを指定
            user_height: 200,
            user_weight: 100,
            user_name: "UserPageのゲスト",
            account: user?.email ?? "", // accountはログインしているユーザーのメールアドレスとして設定
          },
        ]);
      if (insertError) {
        console.error("Error adding user information:", insertError.message);
      } else {
        console.log("User information added successfully");
      }
    }
    console.log("getUserAccount内");
  };

  //ページリダイレクト時にユーザーのメールアドレスをuserAccountに格納する
  useEffect(() => {
    getUserAccount();
  }, []);

  return (
    <>
      <UserPage />
    </>
  );
};

export default Page;
