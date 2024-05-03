import Image from "next/image";
import TopPageIn from "./TopPageIn";

export default function TopPage() {
  return (
    <>
      <div className="fixed h-screen w-screen -z-50">
        <Image
          src="/TopPage_background.jpg"
          alt="トップページの背景画像"
          className="object-cover"
          quality={100}
          sizes="100vw"
          fill
        />
      </div>
      {/* {currentUser === null ? <Authentication /> : <TopPageIn />} */}
      <TopPageIn />
    </>
  );
}
