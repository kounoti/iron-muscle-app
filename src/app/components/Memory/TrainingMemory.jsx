import React from "react";

const TrainingMemory = ({ memories }) => {
  return (
    <div>
      <table className="border-2">
        {memories.map((memory) => (
          <div key={memory.id}>
            <tr>
              <th>No</th>
              <th>日付</th>
              <th>鍛えた部位</th>
              <th>使用器具</th>
              <th>回数</th>
            </tr>
            <tr>
              <td>{memory.id}</td>
              <td>{memory.date}</td>
              <td>{memory.musclePart}</td>
              <td>{memory.trainingMenu}</td>
              <td>{memory.count}</td>
            </tr>
          </div>
        ))}
      </table>
    </div>
  );
};

export default TrainingMemory;
