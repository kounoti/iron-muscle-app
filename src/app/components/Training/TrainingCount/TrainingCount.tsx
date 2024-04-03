"use client";

import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";
import { counters } from "./counters";

// TrainingCountのProps型定義
type TrainingCountProps = {
  onCountChange: (newCount: string) => void;
};

export const TrainingCount = ({ onCountChange }: TrainingCountProps) => {
  const [trainingCount, setTrainingCount] = useState("");

  const handleChangeCount = (newCount: string) => {
    setTrainingCount(newCount);
    onCountChange(newCount);
  };

  return (
    <>
      <Box my="20px">
        <h2 style={{ marginBottom: "10px", fontWeight: "bold" }}>回数を選択</h2>
        <Select
          placeholder=""
          value={trainingCount}
          onChange={(e) => handleChangeCount(e.target.value)}
        >
          {counters.map((count) => {
            return (
              <option key={count} value={count}>
                {count}
              </option>
            );
          })}
        </Select>
      </Box>
    </>
  );
};
