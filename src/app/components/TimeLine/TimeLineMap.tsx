import React from "react";
import { TimeLineMemoryType, TimeLineType } from "./TimeLine";
import Image from "next/image";

const TimeLineMap = ({
  timeLineMemory,
}: {
  timeLineMemory: TimeLineMemoryType;
}) => {
  return (
    <div>
      <div className="flex items-start md:items-center">
        <Image
          src="/avatar.jpg"
          alt="Avatar"
          className="rounded-full w-10 h-10"
        />
        <div className="ml-4">
          <p className="font-semibold">{timeLineMemory.account}</p>
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
