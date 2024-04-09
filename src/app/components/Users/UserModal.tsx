"use client";

import React, { useEffect, useState } from "react";
import { userType } from "./page";
import { supabase } from "../../../utils/supabaseClient";
import { supabase_google } from "../Authentication/SupabaseGoogle";

type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  user: userType;
};

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  const [name, setName] = useState<string>(user.name);
  const [height, setHeight] = useState<number>(user.height);
  const [weight, setWeight] = useState<number>(user.weight);

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

  // 保存ボタンを押下した時にユーザー情報を一式サーバーに追加する
  const addToUserInformation = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const { data, error } = await supabase.from("userInformation").insert([
      {
        user_height: height,
        user_weight: weight,
        user_name: name,
      },
    ]);

    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold">プロフィールを編集</h2>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              名前
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="height"
              className="block text-gray-700 font-semibold mb-2"
            >
              身長 (cm)
            </label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="weight"
              className="block text-gray-700 font-semibold mb-2"
            >
              体重 (kg)
            </label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="bg-gray-200 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            キャンセル
          </button>
          <button
            onClick={addToUserInformation}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
