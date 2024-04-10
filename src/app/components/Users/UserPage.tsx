"use client";

import React, { useEffect, useState } from "react";
import UserInformation from "./UserInformation";
import { supabase } from "../../../utils/supabaseClient";

export type userType = {
  user_name: string;
  user_age: number;
  user_avatar: string;
  user_height: number;
  user_weight: number;
  user_account: string;
};

type UserPageProps = {
  user: userType;
};

const UserPage: React.FC<UserPageProps> = ({ user }) => {
  //  sueEffect内で非同期処理を行うことでuse clientとasyncの衝突を防ぐ
  //   useEffect(() => {
  //     async function fetchData(): Promise<void> {
  //       try {
  //         const { data, error } = await supabase
  //           .from("userInformation")
  //           .select("*");
  //         // エラー以外の時にuserにデータを格納する。
  //         if (error) {
  //           console.error("Error fetching user information:", error.message);
  //           return;
  //         }
  //         if (data && data.length > 0) {
  //           const userInfo = data[0];
  //           setUser({
  //             name: userInfo.user_name,
  //             age: userInfo.user_age,
  //             avatar: userInfo.user_avatar,
  //             height: userInfo.user_height,
  //             weight: userInfo.user_weight,
  //           });
  //         }
  //       } catch (error: any) {
  //         console.error("Error fetching user information:", error.message);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center mt-8">ユーザー情報</h1>
        <UserInformation user={user} />
      </div>

      <div className="flex justify-center">
        <a href="/components/TopPage" className="font-bold text-blue-700 mt-5">
          TOPへ戻る
        </a>
      </div>
    </>
  );
};

export default UserPage;
