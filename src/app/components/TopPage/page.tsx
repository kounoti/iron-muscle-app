import Image from "next/image";
import TopPageIn from "./TopPageIn";

export default function TopPage() {
  return (
    <>
      <div className="relative">
        <div className="fixed inset-0 z-0 -z-50">
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
