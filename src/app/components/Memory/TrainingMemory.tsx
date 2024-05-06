"use client";

import React, { useState } from "react";

import { RiDeleteBin6Fill } from "react-icons/ri";
import { SlSpeech } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { supabase } from "../../../utils/supabaseClient";
import { UUID } from "crypto";
import TimeLineModal from "../TimeLine/TimeLineModal";

export type MemoryType = {
  // メモリの型定義
  id: UUID;
  musclePart: string;
  trainingMenu: string;
  weight: string;
  count: string;
  date: string;
  account?: string;
  bodyWeight?: string;
  timelineflag?: boolean;
};

// SimpleDatePickerのPropsの型定義
type TrainingMemoryType = {
  memories: MemoryType[];
};

const TrainingMemory = ({ memories }: TrainingMemoryType) => {
  // TimeLineModalのステート
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [TimeLineMemory, setTimeLineMemory] = useState<MemoryType | null>(null);

  const router = useRouter();

  if (!Array.isArray(memories)) {
    memories = [];
  }

  // 削除ボタンを押した時の処理
  const DeleteMemory = async (id: UUID) => {
    const { data, error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      console.error("Error deleting memory:", error.message);
      return;
    }
    router.push("/components/Memory");
    router.refresh();
  };

  // 投稿ボタンを押した時の処理
  const addTimeLine = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    memory: MemoryType
  ) => {
    e.preventDefault();

    setTimeLineMemory({ ...memory });

    setIsModalOpen(true);
  };

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <table className="w-full sm:w-250 bg-white border border-collapse border-gray-300 shadow-md rounded-md">
          <thead className="bg-teal-400 text-white">
            <tr>
              <th className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                日付
              </th>
              <th className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border hidden sm:table-cell">
                鍛えた部位
              </th>
              <th className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                トレーニングメニュー
              </th>
              <th className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                重量
              </th>
              <th className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                回数
              </th>
              <th className="text-center border" style={{ width: "1%" }}>
                {/* 削除ボタンの列の幅を調整 */}
              </th>
            </tr>
          </thead>
          <tbody>
            {memories.map((memory: MemoryType) => (
              <tr key={memory.id}>
                <td className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                  {memory.date}
                </td>
                <td className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border hidden sm:table-cell">
                  {memory.musclePart}
                </td>
                <td className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                  {memory.trainingMenu}
                </td>
                <td className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                  {memory.weight}kg
                </td>
                <td className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                  {memory.count}回
                </td>
                <td className="text-center border">
                  {/* 投稿ボタン */}
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-600 rounded-md p-1 flex items-center"
                    onClick={(e) => addTimeLine(e, memory)} // 投稿ボタンがクリックされたときにトレーニング情報を渡す
                    style={{ width: "fit-content" }}
                  >
                    <SlSpeech className="mr-1 hidden sm:table-cell" />
                    <span style={{ whiteSpace: "nowrap" }}>投稿</span>
                  </button>
                  {/* 削除ボタン */}
                  <button
                    className="text-white bg-red-500 hover:bg-red-600 rounded-md p-1 flex items-center"
                    onClick={() => DeleteMemory(memory.id)}
                    style={{ width: "fit-content" }}
                  >
                    <RiDeleteBin6Fill className="mr-1 hidden sm:table-cell" />
                    <span style={{ whiteSpace: "nowrap" }}>削除</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <TimeLineModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          musclePart={TimeLineMemory?.musclePart}
          trainingMenu={TimeLineMemory?.trainingMenu}
          weight={TimeLineMemory?.weight}
          count={TimeLineMemory?.count}
          date={TimeLineMemory?.date}
          account={TimeLineMemory?.account}
          bodyWeight={TimeLineMemory?.bodyWeight}
          timelineflag={TimeLineMemory?.timelineflag}
        />
      )}
    </div>
  );
};

export default TrainingMemory;
