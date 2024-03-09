import React from "react";

const TrainingMemory = ({ memories }) => {
  return (
    <>
      <table className="border-2">
        <thead>
          <tr>
            <th>日付</th>
            <th>鍛えた部位</th>
            <th>使用器具</th>
            <th>回数</th>
          </tr>
        </thead>
        <tbody>
          {memories.map((memory) => (
            <tr key={memory.id}>
              <td>{memory.date}</td>
              <td>{memory.musclePart}</td>
              <td>{memory.trainingMenu}</td>
              <td>{memory.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TrainingMemory;
