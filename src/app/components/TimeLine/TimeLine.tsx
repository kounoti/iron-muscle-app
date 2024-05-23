import React from "react";
import { UUID } from "crypto";
import TimeLineMap from "./TimeLineMap";
import Link from "next/link";

export type TimeLineMemoryType = {
  // メモリの型定義
  id: UUID;
  musclePart: string;
  trainingMenu: string;
  weight: string;
  count: string;
  date: string;
  account?: string;
  timelineflag: boolean;
  created_at: Date;
  comment: string;
};

// export type UserInfoType = {
//   // メモリの型定義
//   userid: number;
//   user_height: number;
//   user_weight: number;
//   user_name: string;
//   user_account: string;
//   user_age: number;
//   user_avatar: string;
// };

export type TimeLineType = {
  timeLineMemories: TimeLineMemoryType[];
  // userInfo: UserInfoType[];
};

const TimeLine = ({ timeLineMemories }: TimeLineType) => {
  return (
    <div>
      <div className="max-w-3xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Muscle History</h1>
        {timeLineMemories.map((timeLineMemory: TimeLineMemoryType) => (
          <div key={timeLineMemory.id}>
            <TimeLineMap timeLineMemory={timeLineMemory} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/components/TopPage" className="font-bold text-blue-700">
          TOPへ戻る
        </Link>
      </div>
    </div>
  );
};

export default TimeLine;
