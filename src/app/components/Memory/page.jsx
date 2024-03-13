// import { getMuscleMemory } from "@/api/muscleMemoryAPI";
import Link from "next/link";
import TrainingMemory from "./TrainingMemory";

// import DeleteButton from "./DeleteButton";

import { NextResponse } from "next/server";
import { supabase } from "src/utils/supabaseClient";

// export async function GET() {
//   const { data, error } = await supabase.from("posts").select("*");

//   if (error) {
//     return NextResponse.json(error);
//   }
//   return NextResponse.json(data, { status: 200 });
// }

export default async function Page() {
  // const API_URL = process.env.SUPABASE_URL;
  // const res = await GET(`${API_URL}`, { cache: "no-store" });
  const { data, error } = await supabase.from("posts").select("*");
  // const memories = await res.json();
  const memories = data;
  console.log(data);
  console.log(error);
  console.log(memories);

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
