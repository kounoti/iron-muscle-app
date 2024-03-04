import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <>
      <h1>TOPページです</h1>
      <h1>環境構築中</h1>
      <Link href="/components/Users">ユーザー情報ページへ</Link>
      <br/>
      <Link href="/components/Header">Headerページへ</Link>
    </>
  );
}
