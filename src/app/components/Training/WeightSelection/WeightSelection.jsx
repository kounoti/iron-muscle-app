"use client";

import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";
import { weights } from "./Weights";

export const TrainingWeight = ({ onWeightChange }) => {
  const [trainingWeight, setTrainingWeight] = useState("");

  const handleChangeWeight = (newWeight) => {
    setTrainingWeight(newWeight);
    onWeightChange(newWeight);
  };

  return (
    <>
      <Box my="20px">
        <h2 style={{ marginBottom: "10px", fontWeight: "bold" }}>
          重量を選択(kg)
        </h2>
        <Select
          placeholder=""
          value={trainingWeight}
          onChange={(e) => handleChangeWeight(e.target.value)}
        >
          {weights.map((weight) => {
            return (
              <option key={weight} value={weight}>
                {weight}
              </option>
            );
          })}
        </Select>
      </Box>
    </>
  );
};
