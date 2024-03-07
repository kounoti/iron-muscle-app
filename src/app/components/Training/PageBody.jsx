import React from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";
import { SelectMuscleParts } from "./SelectMuscleParts/SelectMuscleParts";
import { NumberOfTimes } from "./NumberOfTimes/NumberOfTimes";
import { SimpleDatePicker } from "./Calendar/Calendar";
import { createMuscleMemory } from "@/api/muscleMemoryAPI";

const PageBody = () => {
  return (
    <>
      <ChakraProvider>
        <Box mx="15%">
          <div>トレーニングページです</div>
          <SelectMuscleParts />
          <SimpleDatePicker />
          <NumberOfTimes />
        </Box>
      </ChakraProvider>

      <Box className="-screen flex justify-center items-center ">
        {/* 記録する項目をデータベースに追加する処理を下記ボタンのonClickをトリガーに行う */}
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={createMuscleMemory(
            id,
            musclePart,
            trainingMenu,
            count,
            date
          )}
        >
          トレーニングを記録する
        </Button>
      </Box>
      <br />

      <Link href="/" className="font-bold text-blue-700">
        TOPへ戻る
      </Link>
    </>
  );
};

export default PageBody;
