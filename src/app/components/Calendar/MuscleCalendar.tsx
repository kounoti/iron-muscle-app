"use client";

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import CalendarModal from "./CalendarModal";
import { supabase } from "../../../utils/supabaseClient"; // Supabaseのクライアントをインポート
import { MemoryType } from "../Memory/TrainingMemory";

type MuscleCalendarProps = {
  account: string;
};

const MuscleCalendar: React.FC<MuscleCalendarProps> = ({ account }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [trainings, setTrainings] = useState<MemoryType[]>([]);
  const [trainingDates, setTrainingDates] = useState<string[]>([]);

  useEffect(() => {
    // 初回ロード時にトレーニング情報を全て取得
    const fetchTrainings = async () => {
      const { data: trainingData, error } = await supabase
        .from("posts")
        .select("*")
        .eq("account", account);

      if (error) {
        console.error("Error fetching training data:", error.message);
        return;
      }

      setTrainings(trainingData);
      // トレーニングがある日付をセット
      const dates = trainingData.map((training: MemoryType) => training.date);
      setTrainingDates(dates);
      console.log(dates);
    };

    fetchTrainings();
  }, [account]);

  const handleDateClick = async (arg: DateClickArg) => {
    const clickedDate = arg.dateStr;
    const { data: trainingData, error } = await supabase
      .from("posts")
      .select("*")
      .eq("date", clickedDate)
      .eq("account", account);

    if (error) {
      console.error("Error fetching training data:", error.message);
      return;
    }

    setTrainings(trainingData);
    setSelectedDate(clickedDate);
    setIsModalOpen(true);
  };

  // 日付に応じてクラスを追加する関数
  const dayCellClassNames = (arg: any) => {
    // 修正：日付を1日後にずらす
    const date = new Date(arg.date);
    date.setDate(date.getDate() + 1); // 日付を1日後に設定
    const dateString = date.toISOString().split("T")[0];
    return trainingDates.includes(dateString) ? "bg-green-200" : "";
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        // events={trainings.map((training) => ({
        //   title: training.trainingMenu,
        //   date: training.date,
        // }))}
        dateClick={handleDateClick}
        dayCellClassNames={dayCellClassNames} // クラス名の適用
      />
      {isModalOpen && selectedDate && (
        <CalendarModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          date={selectedDate}
          trainings={trainings}
        />
      )}
    </>
  );
};

export default MuscleCalendar;
