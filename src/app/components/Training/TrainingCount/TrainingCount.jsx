"use client";

import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";
import { Counts, counters } from "./Counts";

export const TrainingCount = ({ onCountChange }) => {
  const [trainingCount, setTrainingCount] = useState("");

  const handleChangeCount = (newCount) => {
    setTrainingCount(newCount);
    onCountChange(newCount);
  };

  return (
    <>
      <Box my="20px">
        <h2 style={{ marginBottom: "10px" }}>回数を選択</h2>
        <Select
          placeholder=""
          value={trainingCount}
          onChange={(e) => handleChangeCount(e.target.value)}
        >
          {Counts.map((count) => {
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
