"use client";

import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";
import { SelectTrainingMenu } from "../SelectTraining/SelectTrainingMenu";

const muscleParts = ["胸", "背中", "脚", "肩", "腕"];

export const SelectMuscleParts = () => {
  const [musclePartsName, setMusclePartsName] = useState("");

  return (
    <div>
      <Box my="20px">
        <h2 style={{ marginBottom: "10px" }}>鍛える部位を選択</h2>
        <Select
          placeholder=""
          value={musclePartsName}
          onChange={(e) => setMusclePartsName(e.target.value)}
        >
          {muscleParts.map((musclePart) => {
            return (
              <option key={musclePart} value={musclePart}>
                {musclePart}
              </option>
            );
          })}
        </Select>
      </Box>

      <Box my="20px">
        <SelectTrainingMenu musclePartsName={musclePartsName} />
      </Box>
    </div>
  );
};
