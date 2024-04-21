import React from "react";
import { UUID } from "crypto";
import Image from "next/image";
import TimeLineMap from "./TimeLineMap";

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
  // 仮のデータ
  const trainingLogs = [
    {
      user_id: "user1",
      user_name: "John",
      user_avatar: "/avatar.jpg",
      content: "Squats",
      date: new Date("2024-04-18T10:30:00"),
      training_date: "2024-04-18",
      equipment: "Barbell",
      repetitions: 10,
      weight: "100kg",
    },
    {
      user_id: "user2",
      user_name: "Alice",
      user_avatar: "/avatar.jpg",
      content: "Push-ups",
      date: new Date("2024-04-18T11:45:00"),
      training_date: "2024-04-18",
      equipment: "Bodyweight",
      repetitions: 20,
      weight: "-",
    },
    {
      user_id: "user3",
      user_name: "Bob",
      user_avatar: "/avatar.jpg",
      content: "Deadlifts",
      date: new Date("2024-04-18T13:15:00"),
      training_date: "2024-04-18",
      equipment: "Barbell",
      repetitions: 8,
      weight: "120kg",
    },
    // 他のトレーニングログ...
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Muscle History</h1>
      {timeLineMemories.map((timeLineMemory: TimeLineMemoryType) => (
        <div
          key={timeLineMemory.id}
          className="border border-gray-300 p-4 rounded-md mb-4 flex flex-col md:flex-row items-start"
        >
          <TimeLineMap timeLineMemory={timeLineMemory} />
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
