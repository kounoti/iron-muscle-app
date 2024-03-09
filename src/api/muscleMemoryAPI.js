import { Memory } from "./muscleMemoryTypes";

export const getMuscleMemory = async () => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" }); //SSR cache:no-store  SSG cache:force-cache ISR next:revalidate
  // 筋トレアプリの履歴はそこそこ更新頻度が高いため、SSRを使用する

  const memories = await res.json();
  // .json()で文字列化する
  return memories;
};

// export const createMuscleMemory = async (
//   id,
//   musclePart,
//   trainingMenu,
//   count,
//   date
// ) => {
//   const res = await fetch("http://localhost:3001/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ id, musclePart, trainingMenu, count, date }),
//   }); //SSR cache:no-store  SSG cache:force-cache ISR next:revalidate

//   if (!res.ok) {
//     throw new Error("エラーが発生しました");
//   }

//   const newMemory = await res.json();
//   // .json()で文字列化する
//   return newMemory;
// };

// export const deleteMuscleMemory = async () => {
//   const res = await fetch("http://localhost:3001/posts", {
//     method: "DELETE",
//   }); //SSR cache:no-store  SSG cache:force-cache ISR next:revalidate

//   if (!res.ok) {
//     console.error(res);
//     throw new Error("エラーが発生しました");
//   }
// };
