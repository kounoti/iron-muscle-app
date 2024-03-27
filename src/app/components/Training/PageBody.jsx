"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { SelectMuscleParts } from "./SelectMuscleParts/SelectMuscleParts";
import { TrainingCount } from "./TrainingCount/TrainingCount";
import { SimpleDatePicker } from "./Calendar/Calendar";

import { supabase } from "src/utils/supabaseClient";
import { TrainingWeight } from "./WeightSelection/WeightSelection";
import { supabase_google } from "../Authentication/page";
import { BodyWeight } from "./BodyWeight/BodyWeight";

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

  // 親コンポーネントのステート（重量）
  const [weight, setWeight] = useState("1");
  // 子コンポーネントからの値を受け取るコールバック関数（重量）
  const handleChildWeightChange = (newWeight) => {
    setWeight(newWeight);
  };

  // 今日の日付を取得し、年月日の情報に変更する
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  // 親コンポーネントのステート（実施日）
  const [date, setDate] = React.useState(formattedDate);
  // 子コンポーネントからの値を受け取るコールバック関数（実施日）
  const handleChildDateChange = (newDate) => {
    setDate(newDate);
  };

  // 親コンポーネントのステート（体重）
  const [bodyWeight, setBodyWeight] = useState("");
  // 子コンポーネントからの値を受け取るコールバック関数（体重）
  const handleChildBodyWeightChange = (newBodyWeight) => {
    setBodyWeight(newBodyWeight);
  };

  const router = useRouter();

  const [account, setAccount] = useState("");

  //ログインしたユーザーのメールアドレスをuserAccountに格納する
  const getUserAccount = async () => {
    // ログインのセッションを取得する処理
    const { data } = await supabase_google.auth.getSession();
    // セッションがあるときだけ現在ログインしているユーザーを取得する
    if (data.session !== null) {
      // supabaseに用意されている現在ログインしているユーザーを取得する関数
      const {
        data: { user },
      } = await supabase_google.auth.getUser();
      // currentUserにユーザーのメールアドレスを格納
      setAccount(user.email);
    }
    console.log("getUserAccount内");
  };

  //ページリダイレクト時にユーザーのメールアドレスをuserAccountに格納する
  useEffect(() => {
    getUserAccount();
  }, []);

  // トレーニング追加のボタンを押下した時にトレーニング情報を一式サーバーに追加する
  const addToServerAndPush = async (e) => {
    e.preventDefault();
    // const newId = `${date}-${trainingMenu}-${count}`;

    // const { id, musclePart, trainingMenu, count, date } = await req.json();
    const { data, error } = await supabase.from("posts").insert([
      {
        // id: id,
        musclePart: musclePart,
        trainingMenu: trainingMenu,
        weight: weight,
        count: count,
        date: date,
        account: account,
        bodyWeight: bodyWeight,
      },
    ]);

    // const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.SUPABASE_URL;
    // await fetch(`${API_URL}/api/memories`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: newId,
    //     musclePart,
    //     trainingMenu,
    //     count,
    //     date,
    //   }),
    // }
    // );

    // 下記はjson-serverを使うときに使用するコード
    // await createMuscleMemory(musclePart, trainingMenu, count, date);

    router.push("/components/Memory");
    router.refresh();
  };

  useEffect(() => {
    if (musclePart === "胸") {
      setTrainingMenu("ベンチプレス");
    } else if (musclePart === "背中") {
      setTrainingMenu("ラットプルダウン");
    } else if (musclePart === "脚") {
      setTrainingMenu("スクワット");
    } else if (musclePart === "肩") {
      setTrainingMenu("サイドレイズ");
    } else if (musclePart === "腕") {
      setTrainingMenu("アームカール");
    }
  }, [musclePart]);

  return (
    <>
      <ChakraProvider>
        <Box mx="15%">
          {/* <div>トレーニングページです</div> */}
          <SelectMuscleParts
            onChildMuscleChange={handleChildMuscleChange}
            onChildEquipmentChange={handleChildEquipmentChange}
          />
          <TrainingWeight onWeightChange={handleChildWeightChange} />
          <TrainingCount onCountChange={handleChildCountChange} />
          <SimpleDatePicker onChildDateChange={handleChildDateChange} />
          {/* <BodyWeight onChildBodyWeightChange={handleChildBodyWeightChange} /> */}
        </Box>
      </ChakraProvider>

      <div className="-screen flex justify-center items-center ">
        {/* 記録する項目をデータベースに追加する処理を下記ボタンのonClickをトリガーに行う */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addToServerAndPush}
          size="lg"
        >
          トレーニングを記録する
        </button>
      </div>
      {/* <br />
      <Link href="/" className="font-bold text-blue-700 text-15 ml-auto">
        TOPへ戻る
      </Link> */}
    </>
  );
};

export default PageBody;
