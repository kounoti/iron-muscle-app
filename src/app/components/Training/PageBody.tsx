"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { SelectMuscleParts } from "./SelectMuscleParts/SelectMuscleParts";
import { TrainingCount } from "./TrainingCount/TrainingCount";
import { SimpleDatePicker } from "./Calendar/Calendar";

import { TrainingWeight } from "./WeightSelection/WeightSelection";

import { BodyWeight } from "./BodyWeight/BodyWeight";
import { supabase } from "../../../utils/supabaseClient";
import { supabase_google } from "../Authentication/SupabaseGoogle";
import TimeLineModal from "../TimeLine/TimeLineModal";
import TrainingModal from "./TrainingModal/TrainingModal";

const PageBody = () => {
  // TimeLineModalのステート
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 親コンポーネントのステート（筋トレ部位、筋トレ器具）
  const [musclePart, setMusclePart] = useState("胸");
  const [trainingMenu, setTrainingMenu] = useState("ベンチプレス");

  // 子コンポーネントからの筋トレ部位情報を取得（筋トレ部位）
  const handleChildMuscleChange = (newMusclePart: string): void => {
    setMusclePart(newMusclePart);
  };
  // 孫コンポーネントからの筋トレ器具情報を取得（筋トレ器具）
  const handleChildEquipmentChange = (newEquipment: string): void => {
    setTrainingMenu(newEquipment);
  };

  // 親コンポーネントのステート（トレーニング回数）
  const [count, setCount] = useState("1");
  // 子コンポーネントからの値を受け取るコールバック関数（トレーニング回数）
  const handleChildCountChange = (newCount: string): void => {
    setCount(newCount);
  };

  // 親コンポーネントのステート（重量）
  const [weight, setWeight] = useState("-");
  // 子コンポーネントからの値を受け取るコールバック関数（重量）
  const handleChildWeightChange = (newWeight: string): void => {
    setWeight(newWeight);
  };

  // 今日の日付を取得し、年月日の情報に変更する
  const currentDate: Date = new Date();
  const formattedDate: string = currentDate.toLocaleDateString();
  // 親コンポーネントのステート（実施日）
  const [date, setDate] = React.useState<string>(formattedDate);
  // 子コンポーネントからの値を受け取るコールバック関数（実施日）
  const handleChildDateChange = (newDate: string): void => {
    setDate(newDate);
  };

  // 親コンポーネントのステート（体重）
  const [bodyWeight, setBodyWeight] = useState("");
  // 子コンポーネントからの値を受け取るコールバック関数（体重）
  const handleChildBodyWeightChange = (newBodyWeight: string): void => {
    setBodyWeight(newBodyWeight);
  };

  const router = useRouter();

  const [account, setAccount] = useState<string>("");

  const [comment, setComment] = useState<string>("");

  const [timelineflag, setTimelineflag] = useState<boolean>(false);

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
      setAccount(user?.email ?? "");
    }
    console.log("getUserAccount内");
  };

  //ページリダイレクト時にユーザーのメールアドレスをuserAccountに格納する
  useEffect(() => {
    getUserAccount();
  }, []);

  // トレーニング追加のボタンを押下した時にトレーニング情報を一式サーバーに追加する
  const addToServerAndPush = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    setIsModalOpen(true);
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
      setTrainingMenu("腕立て伏せ");
    } else if (musclePart === "腹筋") {
      setTrainingMenu("腹筋");
    }
  }, [musclePart]);

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <ChakraProvider>
          <Box mx="20%">
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
            // size="lg"
          >
            トレーニングを記録する
          </button>
          {isModalOpen && (
            <TrainingModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              musclePart={musclePart}
              trainingMenu={trainingMenu}
              weight={weight}
              count={count}
              date={date}
              account={account}
              bodyWeight={bodyWeight}
              timelineflag={timelineflag}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PageBody;
