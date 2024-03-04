import Link from "next/link";
import "./globals.css";
import TopPage from "./components/TopPage/TopPage";

export default function Home() {
  return (
    <>
      <h1>TOPページです</h1>
      <TopPage />
      <TopPage />
      <h1>環境構築中</h1>
      <Link href="/components/Users">ユーザー情報ページへ</Link>
    </>
  );
}
