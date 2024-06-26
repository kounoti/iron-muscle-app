"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { supabase } from "../../../utils/supabaseClient";
import { UUID } from "crypto";

type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  musclePart?: string;
  trainingMenu?: string;
  weight?: string;
  count?: string;
  date?: string;
  account?: string;
  bodyWeight?: string;
  timelineflag?: boolean;
  comment?: string;
  id?: UUID;
};

const TimeLineModal: React.FC<UserModalProps> = ({
  isOpen,
  onClose,
  musclePart,
  trainingMenu,
  weight,
  count,
  date,
  account,
  bodyWeight,
  timelineflag,
  id,
}) => {
  const router = useRouter();
  const [comment, setComment] = useState<string>("");

  //投稿しないボタンを押下した時の処理
  const moveMuscleMemory = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onClose();
    router.push("/components/Memory");
    router.refresh();
  };

  const addToTimeline = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("posts")
      .update({
        timelineflag: true,
        comment: comment,
      })
      .eq("id", id);

    if (!error) {
      onClose();
      router.push("/components/TimeLine");
      router.refresh();
    } else {
      // エラー発生時にエラーがわかるようにコンソール表示
      console.error("データの追加中にエラーが発生しました:", error.message);
    }
  };

  return (
    <div
      className={`z-50 fixed inset-0 flex items-center justify-center ${
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
            タイムラインへ投稿しますか？
          </h2>
        </div>
        <div className="p-4">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 font-semibold"
          >
            コメント
          </label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            rows={3}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 px-3 py-2 focus:ring-indigo-500 focus:border-transparent block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
            placeholder="コメントを入力してください"
          ></textarea>
        </div>
        <div className="bg-white p-4 flex justify-end">
          <button
            onClick={moveMuscleMemory}
            className="mr-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            閉じる
          </button>
          <button
            onClick={addToTimeline}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            投稿
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeLineModal;
