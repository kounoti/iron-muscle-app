"use client";

import { FormEvent, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Page() {
  const [geminiResponse, setGeminiResponse] = useState<any>("");
  const prompt = "広背筋の効率的な鍛え方について教えてください";

  const Gemini = () => {
    const postData = async () => {
      const response = await fetch(
        "https://ironmuscleapp.vercel.app/api/gemini-api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt_post: message }), //promptに入力する文字を入れる
        }
      );
      const data = await response.json();
      //   const htmlResponse = marked(data.message); // マークダウン形式の文字列をHTMLに変換
      //   setGeminiResponse(htmlResponse); // HTML形式の回答をセット
      setGeminiResponse(data.message);
    };
    postData();
  };

  const [message, setMessage] = useState<string>("");
  const answer: string = "お問い合わせに対する回答です。";

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここでメッセージの送信処理を行う
    console.log("送信されたメッセージ:", message);
    // setMessage("");
  };

  const handleClearText = () => {
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="py-12 max-w-md mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">
          AI Muscle Trainer
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={message}
            onChange={handleMessageChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows={5}
            placeholder="例：胸筋の効果的な鍛え方について教えてください"
            required
          ></textarea>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => Gemini()}
              className="flex-grow-1 mr-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              送信
            </button>
            <button
              type="button"
              onClick={handleClearText}
              className="flex-none bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
            >
              テキストをクリアする
            </button>
          </div>
        </form>
      </div>
      <div className="py-12 max-w-md mx-auto">
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="font-semibold mb-2">回答:</p>
          {/* <div dangerouslySetInnerHTML={{ __html: geminiResponse }}></div> */}
          <ReactMarkdown>{geminiResponse}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
