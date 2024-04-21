import Link from "next/link";

export default function TopPageIn() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mb-8">
            Welcome to My Fitness App!
          </h1>
          {/* ここにベンチプレスを上げ下げしている棒人間のSVG画像を挿入 */}
          <Link href="/components/Training">
            <a className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out">
              トレーニングを始める
            </a>
          </Link>
        </div>
      </div>

      {/* <div className="flex justify-center items-center m-10">
        <Link
          href="/components/Training"
          className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-10 px-10 rounded border-2 border-blue-400 sm:text-5xl text-2xl "
        >
          トレーニング開始
        </Link>
        
      </div> */}
    </>
  );
}
