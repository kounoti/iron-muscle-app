"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// SimpleDatePickerのPropsの型定義
type SimpleDatePickerProps = {
  onChildDateChange: (newDate: string) => void;
};

export const SimpleDatePicker = ({
  onChildDateChange,
}: SimpleDatePickerProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const updateDate = (newDate: Date): void => {
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1; // getMonthは0から始まるため+1
    const day = newDate.getDate();
    const formattedDate = `${year}/${month}/${day}`;
    setStartDate(newDate);
    onChildDateChange(formattedDate);
  };

  return (
    <>
      <Box my="20px">
        <h2 style={{ marginBottom: "10px", fontWeight: "bold" }}>日付を選択</h2>
        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date: Date) => updateDate(date)}
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
