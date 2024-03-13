import React from "react";

const TrainingMemory = ({ memories }) => {
  if (!Array.isArray(memories)) {
    memories = [];
  }

  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-collapse border-gray-300 shadow-md rounded-md">
          <thead className="bg-teal-400 text-white">
            <tr>
              <th className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                日付
              </th>
              <th className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                鍛えた部位
              </th>
              <th className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                使用器具
              </th>
              <th className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                回数
              </th>
            </tr>
          </thead>
          <tbody>
            {memories.map((memory) => (
              <tr key={memory.id}>
                <td className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                  {memory.date}
                </td>
                <td className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                  {memory.musclePart}
                </td>
                <td className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                  {memory.trainingMenu}
                </td>
                <td className="p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border ">
                  {" "}
                  {/* border-none を適用 */}
                  {memory.count}回
                </td>
                <td className="hidden sm:table-cell p-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center border">
                  <button className="text-red-500 hover:text-red-700">
                    削除
                  </button>{" "}
                  {/* 削除ボタン */}
                  <button className="text-blue-500 hover:text-blue-700 ml-2">
                    編集
                  </button>{" "}
                  {/* 編集ボタン */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainingMemory;
