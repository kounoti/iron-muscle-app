import Image from "next/image";
import Link from "next/link";

const TopPage = () => {
  return (
    <>
      <div className="center">
        <Image
          src="/toppage-muscle-training.jpg"
          alt=""
          width={500}
          height={100}
          className="w-4/5 mx-auto"
        />
      </div>
    </>
  );
};

export default TopPage;
