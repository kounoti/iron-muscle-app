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
  // 親コンポーネントのステート（筋トレ部位、筋トレ器具）
  const [musclePart, setMusclePart] = useState("胸");
  const [trainingMenu, setTrainingMenu] = useState("ベンチプレス");

  // 子コンポーネントからの筋トレ部位情報を取得（筋トレ部位）
  const handleChildMuscleChange = (newMusclePart) => {
    setMusclePart(newMusclePart);
  };
  // 孫コンポーネントからの筋トレ器具情報を取得（筋トレ器具）
  const handleChildEquipmentChange = (newEquipment) => {
    setTrainingMenu(newEquipment);
  };

  // 親コンポーネントのステート（トレーニング回数）
  const [count, setCount] = useState("1");
  // 子コンポーネントからの値を受け取るコールバック関数（トレーニング回数）
  const handleChildCountChange = (newCount) => {
    setCount(newCount);
  };

  // 親コンポーネントのステート（実施日）
  const [date, setDate] = React.useState("");
  // 子コンポーネントからの値を受け取るコールバック関数（実施日）
  const handleChildDateChange = (newDate) => {
    setDate(newDate);
  };

  // const [id, setId] = useState("");

  const router = useRouter();
  // let  = "test-id";

  // トレーニング追加のボタンを押下した時にトレーニング情報を一式サーバーに追加する
  const addToServerAndPush = async (e) => {
    e.preventDefault();
    const newId = `${date}-${trainingMenu}`;

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: newId,
        musclePart,
        trainingMenu,
        count,
        date,
      }),
    });

    // 下記はjson-serverを使うときに使用するコード
    // await createMuscleMemory(musclePart, trainingMenu, count, date);

    router.push("/");
    router.refresh();
  };

  return (
    <>
      <ChakraProvider>
        <Box mx="15%">
          <div>トレーニングページです</div>
          <SelectMuscleParts
            onChildMuscleChange={handleChildMuscleChange}
            onChildEquipmentChange={handleChildEquipmentChange}
          />
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
