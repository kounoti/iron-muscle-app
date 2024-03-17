"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { GiMuscleUp } from "react-icons/gi";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <header className="bg-teal-500 text-gray-50 flex items-center justify-between p-3 md:p-5">
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

        <button
          className="md:hidden text-gray-50 focus:outline-none"
          onClick={toggleDrawer}
        >
          <HiMenu />
        </button>
      </header>

      {isDrawerOpen && (
        <div className="fixed top-0 right-0 h-full w-full bg-gray-100 bg-opacity-70 z-50">
          <div className="fixed top-0 right-0 h-full w-2/3 bg-white overflow-y-auto">
            <div className="p-4">
              <Link href="/" passHref>
                <div className="w-full p-2 border-b border-gray-500">
                  <button
                    className="w-full p-4  bg-teal-100 font-bold"
                    onClick={closeDrawer}
                  >
                    TOP
                  </button>
                </div>
              </Link>
              <Link href="/components/Users" passHref>
                <div className="w-full p-2 border-b border-gray-500">
                  <button
                    className="w-full p-4 bg-teal-100 font-bold"
                    onClick={closeDrawer}
                  >
                    ユーザ情報
                  </button>
                </div>
              </Link>
              <Link href="/components/Memory" passHref>
                <div className="w-full p-2 border-b border-gray-500">
                  <button
                    className="w-full p-4 bg-teal-100 font-bold"
                    onClick={closeDrawer}
                  >
                    今までの記録
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="fixed top-0 left-0 h-full w-1/3 bg-transparent z-50"
            onClick={closeDrawer}
          />
        </div>
      )}
    </>
  );
};

export default Header;
