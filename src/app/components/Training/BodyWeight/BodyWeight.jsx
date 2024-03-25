"use client";

import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";
import { BodyWeights } from "./BodyWeights";

export const BodyWeight = ({ onChildBodyWeightChange }) => {
  const [bodyWeight, setBodyWeight] = useState("");

  const handleChangeBodyWeight = (newBodyWeight) => {
    setBodyWeight(newBodyWeight);
    onChildBodyWeightChange(newBodyWeight);
  };

  return (
    <>
      <Box my="20px">
        <h2 style={{ marginBottom: "10px", fontWeight: "bold" }}>体重を選択</h2>
        <Select
          placeholder=""
          value={bodyWeight}
          onChange={(e) => handleChangeBodyWeight(e.target.value)}
        >
          {BodyWeights.map((bweight) => {
            return (
              <option key={bweight} value={bweight}>
                {bweight}
              </option>
            );
          })}
        </Select>
      </Box>
    </>
  );
};
