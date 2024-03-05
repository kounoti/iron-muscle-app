import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>ユーザページです</div>
      <Link href="/" className="font-bold text-blue-700">
        TOPへ戻る
      </Link>
    </>
  );
}
