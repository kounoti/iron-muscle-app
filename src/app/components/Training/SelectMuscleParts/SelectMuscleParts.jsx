"use client";

import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";
import { SelectTrainingMenu } from "../SelectTraining/SelectTrainingMenu";

const muscleParts = ["胸", "腹筋", "背中", "脚", "肩", "腕"];

export const SelectMuscleParts = ({
  onChildMuscleChange,
  onChildEquipmentChange,
}) => {
  const [musclePartsName, setMusclePartsName] = useState("胸");

  const handleMusclePartChange = (e) => {
    const newMusclePart = e.target.value;
    onChildMuscleChange(newMusclePart);
    setMusclePartsName(newMusclePart);
  };

  const handleEquipmentChange = (newEquipment) => {
    onChildEquipmentChange(newEquipment);
  };

  return (
    <div>
      <Box my="20px">
        <h2 style={{ marginBottom: "10px", fontWeight: "bold" }}>
          鍛える部位を選択
        </h2>
        <Select
          placeholder=""
          value={musclePartsName}
          onChange={handleMusclePartChange}
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
        <SelectTrainingMenu
          onEquipmentChange={handleEquipmentChange}
          musclePartsName={musclePartsName}
        />
      </Box>
    </div>
  );
};
