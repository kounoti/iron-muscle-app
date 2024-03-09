import React from "react";

const TrainingMemory = ({ memories }) => {
  return (
    <div className="p-8">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
        <thead className="bg-teal-500 text-white">
          <tr>
            <th className="py-2 px-4">日付</th>
            <th className="py-2 px-4">鍛えた部位</th>
            <th className="py-2 px-4">使用器具</th>
            <th className="py-2 px-4">回数</th>
          </tr>
        </thead>
        <tbody>
          {memories.map((memory) => (
            <tr key={memory.id}>
              <td className="py-2 px-4">{memory.date}</td>
              <td className="py-2 px-4">{memory.musclePart}</td>
              <td className="py-2 px-4">{memory.trainingMenu}</td>
              <td className="py-2 px-4">{memory.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingMemory;
