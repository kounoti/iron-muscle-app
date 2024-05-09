import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt_post } = await req.json();
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContentStream(prompt_post);
  const response = await result.response;

  return NextResponse.json({
    message: response.text(),
  });
}
