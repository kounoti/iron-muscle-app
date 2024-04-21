"use client";

import React, { useEffect, useState } from "react";
import { TimeLineMemoryType, TimeLineType } from "./TimeLine";
import Image from "next/image";
import { supabase } from "../../../utils/supabaseClient";

const TimeLineMap = ({
  timeLineMemory,
}: {
  timeLineMemory: TimeLineMemoryType;
}) => {
  const [userName, setUserName] = useState<any>(null);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const { data, error } = await supabase
          .from("userInformation")
          .select("user_name")
          .eq("user_account", timeLineMemory.account);
        if (error) {
          console.error("Error fetching user name:", error.message);
          return;
        }
        if (data && data.length > 0) {
          // 取得したデータからユーザー名をセットする
          setUserName(data[0].user_name);
        }
      } catch (error: any) {
        console.error("Error fetching user name:", error.message);
      }
    }
    fetchData();
  }, [timeLineMemory.account]); // 依存配列から userName を除外して無限ループを解消

  return (
    <div>
      <div className="border border-gray-300 p-4 rounded-md mb-4 flex flex-col md:flex-row items-start">
        <div className="flex items-start md:items-center">
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            className="rounded-full w-10 h-10"
          />
          <div className="ml-4">
            <p className="font-semibold">{userName}</p>
            <p className="text-sm text-gray-500">
              {new Date(timeLineMemory.created_at).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="mx-auto items-center justify-center">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="font-semibold text-center">トレーニング日</td>
                <td className="font-semibold text-center">:</td>
                <td className="font-semibold text-center">
                  {timeLineMemory.date}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-center">
                  トレーニングメニュー
                </td>
                <td className="font-semibold text-center">:</td>
                <td className="font-semibold text-center">
                  {timeLineMemory.trainingMenu}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-center">重量</td>
                <td className="font-semibold text-center">:</td>
                <td className="font-semibold text-center">
                  {timeLineMemory.weight}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-center">回数</td>
                <td className="font-semibold text-center">:</td>
                <td className="font-semibold text-center">
                  {timeLineMemory.count}回
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimeLineMap;
