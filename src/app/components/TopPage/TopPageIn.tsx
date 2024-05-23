import Image from "next/image";
import Link from "next/link";

export default function TopPageIn() {
  return (
    <>
      <div style={{ overflowY: "hidden" }}>
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="text-center text-black mb-8">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Welcome to
              <span className="block sm:inline"> Iron Muscle App!</span>
            </h1>{" "}
            <p className="text-lg text-white">Let&apos;s work out together!</p>
          </div>
          <Link href="/components/Training">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out">
              トレーニング開始
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
