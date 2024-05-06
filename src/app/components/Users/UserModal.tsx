"use client";

import React, { useEffect, useState } from "react";

import { supabase } from "../../../utils/supabaseClient";
import { supabase_google } from "../Authentication/SupabaseGoogle";
import { userType } from "./UserPage";
import { useRouter } from "next/navigation";

type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  user: userType;
  account: string;
};

const UserModal: React.FC<UserModalProps> = ({
  isOpen,
  onClose,
  user,
  account,
}) => {
  const [name, setName] = useState<string>(user.user_name);
  const [age, setAge] = useState<number>(user.user_age);
  const [height, setHeight] = useState<number>(user.user_height);
  const [weight, setWeight] = useState<number>(user.user_weight);

  const router = useRouter();

  // 保存ボタンを押下した時にユーザー情報を一式サーバーに追加する
  const addToUserInformation = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("userInformation")
      .update([
        {
          user_height: height,
          user_weight: weight,
          user_name: name,
          user_age: age,
        },
      ])
      .eq("user_account", account);

    onClose();
    router.push("/components/UserThrough");
    router.refresh();
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
        <div className="bg-teal-500 flex justify-center p-4">
          <h2 className="text-lg text-white font-semibold">
            プロフィールを編集
          </h2>
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
              htmlFor="age"
              className="block text-gray-700 font-semibold mb-2"
            >
              年齢
            </label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
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
        <div className="bg-white p-4 flex justify-end">
          <button
            onClick={onClose}
            className="mr-4  px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
