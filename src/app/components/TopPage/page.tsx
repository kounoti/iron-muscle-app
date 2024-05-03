import Image from "next/image";
import TopPageIn from "./TopPageIn";

export default function TopPage() {
  return (
    <>
      <div style={{ overflowY: "hidden" }}>
        <div className="fixed h-screen w-screen -z-50">
          <Image
            src="/TopPage_background.jpg"
            alt="トップページの背景画像"
            quality={5}
          />
        </div>
        <TopPageIn />
      </div>
    </>
  );
}
