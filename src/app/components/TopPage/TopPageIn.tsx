import Image from "next/image";
import Link from "next/link";

export default function TopPageIn() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center text-black mb-8">
          {/* 画像を画面中央に配置 */}
          <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 mb-4">
            <Image
              src="/gym.png" // 画像のパスを指定
              alt="Iron Muscle Logo" // 画像の代替テキスト
              layout="fill" // 画像を親要素にフィットさせる
              objectFit="contain" // 画像を完全に表示する
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Iron muscle App!
          </h1>
          <p className="text-lg">Let&apos;s work out together!</p>
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
