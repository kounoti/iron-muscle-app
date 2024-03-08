"use client";

import React, { useState } from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SelectMuscleParts } from "./SelectMuscleParts/SelectMuscleParts";
import { TrainingCount } from "./TrainingCount/TrainingCount";
import { SimpleDatePicker } from "./Calendar/Calendar";
import { createMuscleMemory } from "@/api/muscleMemoryAPI";

const PageBody = () => {
  // // 親コンポーネントのステート（筋トレ器具）
  // const [trainingEquipment, setTrainingEquipment] = useState('');
  // // 子コンポーネントからの値を受け取るコールバック関数（筋トレ器具）
  // const handleChildEquipmentChange = (newEquipment) => {
  //   setTrainingEquipment(newEquipment);
  // };

  // 親コンポーネントのステート（トレーニング回数）
  const [count, setCount] = useState("");
  // 子コンポーネントからの値を受け取るコールバック関数（トレーニング回数）
  const handleChildCountChange = (newCount) => {
    setCount(newCount);
  };

  // 親コンポーネントのステート
  const [date, setDate] = React.useState("");
  // 子コンポーネントからの値を受け取るコールバック関数
  const handleChildDateChange = (newDate) => {
    setDate(newDate);
  };

  const router = useRouter();
  let id = "test-id";
  let musclePart = "test-part";
  let trainingMenu = "test-Menu";

  // トレーニング追加のボタンを押下した時にトレーニング情報を一式サーバーに追加する
  const addToServerAndPush = async (e) => {
    e.preventDefault();
    // console.log(id, musclePart, trainingMenu, count, date);

    await createMuscleMemory(id, musclePart, trainingMenu, count, date);

    router.push("/");
    router.refresh();
  };

  return (
    <>
      <ChakraProvider>
        <Box mx="15%">
          <div>トレーニングページです</div>
          <SelectMuscleParts />
          <SimpleDatePicker onChildDateChange={handleChildDateChange} />
          <TrainingCount onCountChange={handleChildCountChange} />
        </Box>
      </ChakraProvider>

      <Box className="-screen flex justify-center items-center ">
        {/* 記録する項目をデータベースに追加する処理を下記ボタンのonClickをトリガーに行う */}
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addToServerAndPush}
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
