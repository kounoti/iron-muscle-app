import Image from "next/image";
import TopPageIn from "./TopPageIn";

export default function TopPage() {
  return (
    <>
      <div className="relative">
        {/* 半透明の黒色を背景画像の上に表示させる */}
        <div className="fixed inset-0 z-10 bg-black opacity-50 -z-30"></div>
        <div className="fixed inset-0 -z-50">
          <Image
            src="/TopPage_background.jpg"
            alt="トップページの背景画像"
            layout="fill"
            objectFit="cover"
            quality={5}
          />
        </div>
        <TopPageIn />
      </div>
    </>
  );
}
