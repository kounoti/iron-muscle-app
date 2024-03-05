import { getMuscleMemory } from "@/api/muscleMemoryAPI";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>今までの記録を確認できるページです</h1>

      <div>
        <table className="border-2">
          <tr>
            <th>No</th>
            <th>日付</th>
            <th>鍛えた部位</th>
            <th>使用器具</th>
            <th>回数</th>
          </tr>
          <tr>
            <td>{memories.id}</td>
            <td>日付</td>
            <td>鍛えた部位</td>
            <td>使用器具</td>
            <td>回数</td>
          </tr>
        </table>
      </div>

      <Link href="/" className="font-bold text-blue-700">
        TOPへ戻る
      </Link>
    </>
  );
}
