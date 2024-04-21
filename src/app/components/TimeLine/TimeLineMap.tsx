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
        // エラー以外の時にmemoriesにdataオブジェクトを格納する。
        if (error) {
          console.error("Error fetching memories:", error.message);
          return;
        }
        setUserName(data);
      } catch (error: any) {
        console.error("Error fetching memories:", error.message);
      }
    }
    fetchData();
  }, [userName, timeLineMemory.account]);

  return (
    <div>
      <div className="flex items-start md:items-center">
        <Image
          src="/avatar.jpg"
          alt="Avatar"
          className="rounded-full w-10 h-10"
        />
        <div className="ml-4">
          <p className="font-semibold">{userName}</p>
          <p className="text-sm text-gray-500">
            {timeLineMemory.created_at.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="mx-auto items-center justify-center">
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="font-semibold text-center">日付</td>
              <td>:{timeLineMemory.date}</td>
            </tr>
            <tr>
              <td className="font-semibold text-center">
                トレーニングメニュー
              </td>
              <td>:{timeLineMemory.trainingMenu}</td>
            </tr>
            <tr>
              <td className="font-semibold text-center">重量</td>
              <td>:{timeLineMemory.weight}</td>
            </tr>
            <tr>
              <td className="font-semibold text-center">回数</td>
              <td>:{timeLineMemory.count}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeLineMap;
