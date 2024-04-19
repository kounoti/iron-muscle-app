"use client";

import Image from "next/image";
import React from "react";

import { useState, useEffect } from "react";

export default function Page() {
  const [userTrainingHistory, setUserTrainingHistory] = useState([]);

  useEffect(() => {
    fetchUserTrainingHistory();
  }, []);

  const fetchUserTrainingHistory = async () => {
    try {
      // ここでは仮に3人のアカウントが投稿したとします
      const users = ["user1", "user2", "user3"];
      const promises = users.map(async (user) => {
        const { data, error } = await supabase
          .from("training_logs")
          .select("*")
          .eq("user_id", user)
          .order("date", { ascending: false });
        if (error) throw error;
        return data || [];
      });
      const allUserTrainingHistory = await Promise.all(promises);
      setUserTrainingHistory(allUserTrainingHistory);
    } catch (error) {
      console.error("Error fetching training history:", error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Training History</h1>
      {userTrainingHistory.map((history, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">User {index + 1}</h2>
          {history.map((log, logIndex) => (
            <div
              key={logIndex}
              className="border border-gray-300 p-4 rounded-md mb-4 flex items-center"
            >
              <Image
                src={log.user_avatar}
                alt="Avatar"
                className="rounded-full w-10 h-10"
              />
              <div className="ml-4">
                <p>{log.content}</p>
                <p className="text-sm text-gray-500">
                  {new Date(log.date).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
