import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../../utils/supabaseClient";
import { IoCloseCircleOutline } from "react-icons/io5";

type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  musclePart?: string;
  trainingMenu?: string;
  weight?: string;
  count?: string;
  date?: string;
  account?: string;
  bodyWeight?: string;
  timelineflag?: boolean;
  comment?: string;
};

const TrainingModal: React.FC<UserModalProps> = ({
  isOpen,
  onClose,
  musclePart,
  trainingMenu,
  weight,
  count,
  date,
  account,
  bodyWeight,
  timelineflag,
}) => {
  const router = useRouter();
  const [comment, setComment] = useState<string>("");

  const moveMuscleMemory = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const { data, error } = await supabase.from("posts").insert([
      {
        musclePart: musclePart,
        trainingMenu: trainingMenu,
        weight: weight,
        count: count,
        date: date,
        account: account,
        bodyWeight: bodyWeight,
        timelineflag: false,
      },
    ]);
    if (!error) {
      onClose();
      router.push("/components/Memory");
      router.refresh();
    } else {
      console.error("データの追加中にエラーが発生しました:", error.message);
    }
  };

  const moveTrainingMenu = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const { data, error } = await supabase.from("posts").insert([
      {
        musclePart: musclePart,
        trainingMenu: trainingMenu,
        weight: weight,
        count: count,
        date: date,
        account: account,
        bodyWeight: bodyWeight,
        timelineflag: false,
      },
    ]);
    if (!error) {
      onClose();
      router.push("/components/Training");
      router.refresh();
    } else {
      console.error("データの追加中にエラーが発生しました:", error.message);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="bg-blue-100 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="flex justify-end p-2">
          <button onClick={onClose}>
            <IoCloseCircleOutline />
          </button>
        </div>
        <div className="bg-blue-200 p-4">
          <h2 className="text-lg font-semibold">トレーニングを続けますか？</h2>
        </div>
        <div className="bg-blue-200 p-4 flex justify-end">
          <button
            onClick={moveMuscleMemory}
            className="mr-4 px-4 py-2 text-sm font-medium text-gray-700 bg-blue-300 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            終了
          </button>
          <button
            onClick={moveTrainingMenu}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            続ける
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingModal;
