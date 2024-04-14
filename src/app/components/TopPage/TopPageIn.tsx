import Link from "next/link";

export default function TopPageIn() {
  return (
    <>
      <div className="flex justify-center items-center m-10">
        <Link
          href="/components/Training"
          className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-10 px-10 rounded border-2 border-blue-400 sm:text-5xl text-2xl "
        >
          トレーニング開始
        </Link>
        <div className="flex justify-center">
          <Link
            href="/components/MuscleCalendar"
            className="font-bold text-blue-700"
          >
            MuscleCalendarへ移行
          </Link>
        </div>
      </div>
    </>
  );
}
