"use client";

import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";
import { counters } from "./Counters";

export const NumberOfTimes = () => {
  const [numberOfTimes, setNumberOfTimes] = useState(0);

  return (
    <>
      <Box my="20px">
        <h2 style={{ marginBottom: "10px" }}>回数を選択</h2>
        <Select
          placeholder=""
          value={numberOfTimes}
          onChange={(e) => setNumberOfTimes(e.target.value)}
        >
          {counters.map((numberOfTime) => {
            return (
              <option key={numberOfTime} value={numberOfTime}>
                {numberOfTime}
              </option>
            );
          })}
        </Select>
      </Box>
    </>
  );
};
