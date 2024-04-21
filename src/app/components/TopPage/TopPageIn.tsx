import Link from "next/link";

export default function TopPageIn() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        {/* 背景画像 */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/toppage-muscle-training')" }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-8">
            Welcome to MyFitnessApp!
          </h1>
          <Link href="/components/Training">
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out">
              Start Training
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
