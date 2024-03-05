"use client";

import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import {
  chestTrainingMenus,
  backTrainingMenus,
  legTrainingMenus,
  shoulderTrainingMenus,
  armTrainingMenus,
} from "./TrainingMenu";

export const SelectTrainingMenu = (props) => {
  const [trainingMenuState, setTrainingMenuState] = useState("");
  const { musclePartsName } = props;

  //   const [trainingState, setTrainingState] = useState([]);
  let trainingMenuList = [];

  if (musclePartsName === "胸") {
    trainingMenuList = chestTrainingMenus.slice();
  } else if (musclePartsName === "背中") {
    trainingMenuList = backTrainingMenus.slice();
  } else if (musclePartsName === "脚") {
    trainingMenuList = legTrainingMenus.slice();
  } else if (musclePartsName === "肩") {
    trainingMenuList = shoulderTrainingMenus.slice();
  } else if (musclePartsName === "腕") {
    trainingMenuList = armTrainingMenus.slice();
  }

  return (
    <div>
      {/* <p>{trainingMenuList}</p> */}
      <h2 style={{ marginBottom: "10px" }}>使用する器具を選択</h2>

      <Select
        placeholder=""
        value={trainingMenuState}
        onChange={(e) => setTrainingMenuState(e.target.value)}
      >
        {trainingMenuList.map((trainingName) => {
          return (
            <option key={trainingName} value={trainingName}>
              {trainingName}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectTrainingMenu;
