"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TimeLineModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const moveTimeLinePage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onClose();
    router.push("/components/TimeLine");
    router.refresh();
  };

  // 保存ボタンを押下した時にユーザー情報を一式サーバーに追加する
  const addToUserInformation = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // const { data, error } = await supabase
    //   .from("userInformation")
    //   .update([
    //     {
    //       user_height: height,
    //       user_weight: weight,
    //       user_name: name,
    //       user_age: age,
    //     },
    //   ])
    //   .eq("user_account", account);

    // onClose();
    // router.push("/components/UserThrough");
    // router.refresh();
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
          <h2 className="text-lg font-semibold">
            タイムラインへ投稿しますか？
          </h2>
        </div>
        <div className="p-4">
          <div>モーダルのbody</div>
        </div>
        <div className="bg-gray-200 p-4 flex justify-end">
          <button
            onClick={addToUserInformation}
            className="mr-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            投稿
          </button>
          <button
            onClick={moveTimeLinePage}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            投稿しない
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeLineModal;
