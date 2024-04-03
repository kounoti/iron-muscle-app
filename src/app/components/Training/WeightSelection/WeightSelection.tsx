"use client";

import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";
import { weights } from "./Weights";

// SimpleDatePickerのPropsの型定義
type TrainingWeightProps = {
  onWeightChange: (newWeight: string) => void;
};

export const TrainingWeight = ({ onWeightChange }: TrainingWeightProps) => {
  const [trainingWeight, setTrainingWeight] = useState<string>("");

  const handleChangeWeight = (newWeight: string): void => {
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
