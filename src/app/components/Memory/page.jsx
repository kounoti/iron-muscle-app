import { getMuscleMemory } from "@/api/muscleMemoryAPI";
import Link from "next/link";
import TrainingMemory from "./trainingMemory";
import DeleteButton from "./DeleteButton";

export default async function Page() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api`, { cache: "no-store" });
  const memories = await res.json();

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
