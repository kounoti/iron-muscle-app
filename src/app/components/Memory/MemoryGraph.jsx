import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Tooltip } from "@chakra-ui/react";

const MemoryGraph = ({ memories }) => {
  const processedData = memories.reduce((acc, curr) => {
    const date = curr.date; // 仮の例
    acc[date] = acc[date] ? acc[date] + 1 : 1;
    return acc;
  }, {});

  console.log(memories);

  // データの形式をRechartsに合わせる
  const chartData = Object.keys(processedData).map((date) => ({
    date,
    count: processedData[date],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </>
    </ResponsiveContainer>
  );
};

export default MemoryGraph;
