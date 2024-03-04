import Link from "next/link";
import { GiMuscleUp } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <header>
        <nav className="bg-teal-500 text-gray-50 flex items-center justify-between p-3 md:p-5">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-lg md:text-xl flex items-center cursor-pointer">
                <GiMuscleUp className="mr-2" />
                筋トレアプリ
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/components/Users" className="hover:underline">
              ユーザー情報
            </Link>
            <Link href="/components/Memory" className="hover:underline">
              今までの記録
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
