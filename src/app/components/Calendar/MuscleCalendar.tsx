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
      const dates = trainingData.map((training: MemoryType) => training.date);
      setTrainingDates(dates);
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

  const dayCellClassNames = (arg: any) => {
    const date = new Date(arg.date);
    date.setDate(date.getDate() + 1);
    const dateString = date.toISOString().split("T")[0];
    return trainingDates.includes(dateString) ? "bg-green-200" : "";
  };

  return (
    <div className="mx-auto p-4 max-w-screen-lg">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        dateClick={handleDateClick}
        dayCellClassNames={dayCellClassNames}
        locale="JP"
      />
      {isModalOpen && selectedDate && (
        <CalendarModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          date={selectedDate}
          trainings={trainings}
        />
      )}
    </div>
  );
};

export default MuscleCalendar;
