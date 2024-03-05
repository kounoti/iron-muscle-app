import { getMuscleMemory } from "@/api/muscleMemoryAPI";
import Link from "next/link";
import TrainingMemory from "./trainingMemory";

export default async function Page() {
  const memories = await getMuscleMemory();
  console.log(memories);

  return (
    <>
      <h1>今までの記録を確認できるページです</h1>

      <TrainingMemory memories={memories} />

      <Link href="/" className="font-bold text-blue-700">
        TOPへ戻る
      </Link>
    </>
  );
}
