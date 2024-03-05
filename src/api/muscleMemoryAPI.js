import { Memory } from "./muscleMemoryTypes";

export const getMuscleMemory = async () => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" }); //SSR cache:no-store  SSG cache:force-cache ISR next:revalidate
  // 筋トレアプリの履歴はそこそこ更新頻度が高いため、SSRを使用する

  const memories = await res.json();
  // .json()で文字列化する
  return memories;
};
