import Link from "next/link";

export default function TopPageIn() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
        <div className="text-center text-white mb-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to MyFitnessApp!</h1>
          <p className="text-lg">Your personal fitness companion</p>
        </div>
        <Link href="/components/Training">
          <a className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out">
            Start Training
          </a>
        </Link>
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
