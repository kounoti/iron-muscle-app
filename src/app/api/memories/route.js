import { NextResponse } from "next/server";
import { supabase } from "src/utils/supabaseClient";

export async function GET(req, res) {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return NextResponse.json(error);
  }
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req, res) {
  const { id, musclePart, trainingMenu, count, date } = await req.json();
  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, musclePart, trainingMenu, count, date }]);

  if (error) {
    return NextResponse.json(error);
  }
  return NextResponse.json(data, { status: 201 });
}
