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
  account: string;
};

const UserPage: React.FC<UserPageProps> = ({ account }) => {
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

  const [user, setUser] = useState<any>({});

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
    console.log("UserPage内にのfetchUserDataに入れています");
    console.log(account);

    fetchUserData();
  }, [account]);

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
