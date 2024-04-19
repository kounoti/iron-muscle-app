"use client";

import React from "react";

import { useState, useEffect } from "react";

export default function Page() {
  // 仮のトレーニング履歴データ
  const trainingLogs = [
    {
      user_id: "user1",
      user_avatar: "avatar1.jpg",
      content: "Squats",
      date: new Date("2024-04-18T10:30:00"),
    },
    {
      user_id: "user2",
      user_avatar: "avatar2.jpg",
      content: "Push-ups",
      date: new Date("2024-04-18T11:45:00"),
    },
    {
      user_id: "user3",
      user_avatar: "avatar3.jpg",
      content: "Deadlifts",
      date: new Date("2024-04-18T13:15:00"),
    },
    {
      user_id: "user1",
      user_avatar: "avatar1.jpg",
      content: "Bench Press",
      date: new Date("2024-04-17T09:00:00"),
    },
    {
      user_id: "user2",
      user_avatar: "avatar2.jpg",
      content: "Pull-ups",
      date: new Date("2024-04-17T12:00:00"),
    },
    {
      user_id: "user3",
      user_avatar: "avatar3.jpg",
      content: "Leg Press",
      date: new Date("2024-04-17T15:30:00"),
    },
  ];

  // ユーザーごとにトレーニングログをグループ化する
  const userTrainingLogs = trainingLogs.reduce((acc, log) => {
    if (!acc[log.user_id]) {
      acc[log.user_id] = [];
    }
    acc[log.user_id].push(log);
    return acc;
  }, {});

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Training History</h1>
      {Object.keys(userTrainingLogs).map((userId, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">User {index + 1}</h2>
          {userTrainingLogs[userId].map((log, logIndex) => (
            <div
              key={logIndex}
              className="border border-gray-300 p-4 rounded-md mb-4 flex items-center"
            >
              <image
                src={log.user_avatar}
                alt="Avatar"
                className="rounded-full w-10 h-10"
              />
              <div className="ml-4">
                <p>{log.content}</p>
                <p className="text-sm text-gray-500">
                  {log.date.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
