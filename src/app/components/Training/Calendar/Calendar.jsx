"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import getMonth from "date-fns/getMonth";
// import getYear from "date-fns/getYear";

export const SimpleDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Box my="20px">
        <h2 style={{ marginBottom: "10px" }}>日付を選択</h2>
        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        {/* 選択した日付の月を表示
        <p>{getYear(startDate)}</p>

        選択した日付の月を表示
        <p>{getMonth(startDate) + 1}</p>

        選択した日付の日を表示
        <p>{startDate.getDate()}</p> */}
      </Box>
    </>
  );
};
