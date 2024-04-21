import Image from "next/image";
import Link from "next/link";

export default function TopPageIn() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center text-black mb-8 flex items-center">
          <div className="mr-4">
            <Image
              src="/gym.png" // 画像のパスを指定
              alt="Iron Muscle Logo" // 画像の代替テキスト
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56" // 画像のサイズをデバイスごとに設定
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Welcome to Iron muscle App!
            </h1>
            <p className="text-lg">Let&apos;s work out together!</p>
          </div>
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
