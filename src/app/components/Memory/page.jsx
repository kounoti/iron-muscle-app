// import { getMuscleMemory } from "@/api/muscleMemoryAPI";
import Link from "next/link";
import TrainingMemory from "./trainingMemory";
// import DeleteButton from "./DeleteButton";

export default async function Page() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/memories`, { cache: "no-store" });
  const memories = await res.json();

  console.log(res);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8 text-gray-800">
        Muscle Memory
      </h1>
      <TrainingMemory memories={memories} />
      <div className="flex justify-center">
        <a href="/" className="font-bold text-blue-700">
          TOPへ戻る
        </a>
      </div>
    </>
  );
}
