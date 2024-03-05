import Link from "next/link";
import "./globals.css";
import TopPage from "./components/TopPage/TopPage";
import { getMuscleMemory } from "@/api/muscleMemoryAPI";

export default function Home() {
  return (
    <>
      <h1>TOPページです</h1>

      <TopPage />
      <TopPage />
      <h1>環境構築中</h1>

      <div className="m-3">
        <Link
          href="/components/Training"
          className="px-4 py-2 text-red-500 border border-red-500 font-semibold rounded hover:bg-red-100"
        >
          トレーニング開始
        </Link>
      </div>

      <br />
      <Link href="/components/Users" className="font-bold text-blue-700">
        ユーザー情報ページへ
      </Link>
    </>
  );
}
