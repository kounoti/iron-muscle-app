import React from "react";
import { MemoryType } from "../Memory/TrainingMemory";

type CalendarModalProps = {
  isOpen: boolean;
  onClose: () => void;
  date: string;
  trainings: MemoryType[];
};

const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  date,
  trainings,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">トレーニング情報 - {date}</h2>
        <table className="w-full bg-white border border-collapse border-gray-300 shadow-md rounded-md">
          <thead className="bg-teal-400 text-white">
            <tr>
              <th className="p-2 text-center border">鍛えた部位</th>
              <th className="p-2 text-center border">トレーニングメニュー</th>
              <th className="p-2 text-center border">重量</th>
              <th className="p-2 text-center border">回数</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training) => (
              <tr key={training.id}>
                <td className="p-2 text-center border">
                  {training.musclePart}
                </td>
                <td className="p-2 text-center border">
                  {training.trainingMenu}
                </td>
                <td className="p-2 text-center border">{training.weight}kg</td>
                <td className="p-2 text-center border">{training.count}回</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          閉じる
        </button>
      </div>
    </div>
  );
};

export default CalendarModal;
