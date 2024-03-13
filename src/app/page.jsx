import Link from "next/link";
import "./globals.css";
import TopPage from "./components/TopPage/TopPage";
import { getMuscleMemory } from "@/api/muscleMemoryAPI";

export default function Home() {
  return (
    <>
      {/* <h1>TOPページです</h1> */}

      {/* <TopPage />
      <h1>環境構築中</h1> */}

      <div className="flex justify-center items-center m-10">
        <Link
          href="/components/Training"
          className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-10 px-10 rounded border-2 border-blue-400 sm:text-5xl text-2xl "
        >
          トレーニング開始
        </Link>
      </div>

      {/* <br />
      <Link href="/components/Users" className="font-bold text-blue-700">
        ユーザー情報ページへ
      </Link> */}
    </>
  );
}
