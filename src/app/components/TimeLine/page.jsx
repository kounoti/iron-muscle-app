"use client";

import React from "react";

import { useState, useEffect } from "react";

export default function Page() {
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
      {trainingLogs.map((log, index) => (
        <div
          key={index}
          className="border border-gray-300 p-4 rounded-md mb-4 flex flex-col md:flex-row items-start"
        >
          <div className="flex items-start md:items-center">
            <image
              src={log.user_avatar}
              alt="Avatar"
              className="rounded-full w-10 h-10"
            />
            <div className="ml-4">
              <p className="font-semibold">{log.user_name}</p>
              <p className="text-sm text-gray-500">
                {log.date.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mx-auto items-center justify-center">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="font-semibold">日付</td>
                  <td>`:${log.training_date}`</td>
                </tr>
                <tr>
                  <td className="font-semibold">トレーニングメニュー:</td>
                  <td>{log.equipment}</td>
                </tr>
                <tr>
                  <td className="font-semibold">重量:</td>
                  <td>{log.weight}</td>
                </tr>
                <tr>
                  <td className="font-semibold">回数:</td>
                  <td>{log.repetitions}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
