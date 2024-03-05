import Link from "next/link";
import "./globals.css";
import TopPage from "./components/TopPage/TopPage";
import { getMuscleMemory } from "@/api/muscleMemoryAPI";

export default async function Home() {
  const memories = await getMuscleMemory();
  console.log(memories);

  return (
    <>
      <h1>TOPページです</h1>

      <div>
        <table className="border-2">
          {memories.map((memory) => (
            <div key={memory.id}>
              <tr>
                <th>No</th>
                <th>日付</th>
                <th>鍛えた部位</th>
                <th>使用器具</th>
                <th>回数</th>
              </tr>
              <tr>
                <td>{memory.id}</td>
                <td>{memory.date}</td>
                <td>鍛えた部位</td>
                <td>使用器具</td>
                <td>回数</td>
              </tr>
            </div>
          ))}
        </table>
      </div>

      <TopPage />
      <TopPage />
      <h1>環境構築中</h1>
      <Link href="/components/Users" className="font-bold text-blue-700">
        ユーザー情報ページへ
      </Link>
    </>
  );
}
