"use client";

import { deleteMuscleMemory } from "@/api/muscleMemoryAPI";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = () => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteMuscleMemory();
    router.push("/");
    router.refresh();
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleDelete}
    >
      記録を全て削除
    </button>
  );
};

export default DeleteButton;
