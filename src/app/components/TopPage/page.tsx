import Image from "next/image";
import TopPageIn from "./TopPageIn";

export default function TopPage() {
  return (
    <>
      <div className="w-full h-full">
        <Image
          src="/TopPage_background.png" // 画像のパスを指定
          alt="TopPageTraining" // 画像の代替テキスト
          layout="fill" // 画像を親要素にフィットさせる
          objectFit="contain" // 画像を完全に表示する
        />
      </div>
      {/* {currentUser === null ? <Authentication /> : <TopPageIn />} */}
      <TopPageIn />
    </>
  );
}
