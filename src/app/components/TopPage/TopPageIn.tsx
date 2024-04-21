import Link from "next/link";

export default function TopPageIn() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center text-black mb-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to MyFitnessApp!</h1>
          <p className="text-lg">Your personal fitness companion</p>
        </div>
        <Link href="/components/Training">
          <a className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out">
            トレーニング開始
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
