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
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center mt-8">ユーザー情報</h1>
        <UserInformation account={account} />
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
