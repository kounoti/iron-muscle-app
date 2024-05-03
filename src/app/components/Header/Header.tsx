"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { GiMuscleUp } from "react-icons/gi";

import { useRouter } from "next/navigation";
import { supabase_google } from "../Authentication/SupabaseGoogle";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const router = useRouter();

  // 現在ログインしているユーザーを取得する処理
  const getCurrentUser = async () => {
    // ログインのセッションを取得する処理
    const { data } = await supabase_google.auth.getSession();
    // セッションがあるときだけ現在ログインしているユーザーを取得する
    if (data.session !== null) {
      // supabaseに用意されている現在ログインしているユーザーを取得する関数
      const {
        data: { user },
      } = await supabase_google.auth.getUser();
      // currentUserにユーザーのメールアドレスを格納
      setCurrentUser(user?.email ?? null);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error: logoutError } = await supabase_google.auth.signOut();
      if (logoutError) {
        throw logoutError;
      }
      setCurrentUser(null); // サインアウト時にcurrentUserをnullに設定
      closeDrawer();
      router.push("/components/Authentication");
    } catch {
      alert("エラーが発生しました");
    }
  };

  // HeaderコンポーネントがレンダリングされたときにgetCurrentUser関数が実行される
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <header className="bg-teal-500 text-gray-50 flex items-center justify-between p-3 md:p-5 z-50 fixed top-0 left-0 right-0">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl flex items-center cursor-pointer">
            <GiMuscleUp className="mr-2" />
            Iron Muscle App
          </h1>
        </div>
        {currentUser && (
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/components/TimeLine" className="hover:underline">
              タイムライン
            </Link>
            <Link href="/components/Memory" className="hover:underline">
              今までの記録
            </Link>
            <Link href="/components/Users" className="hover:underline">
              ユーザー情報
            </Link>
            <button onClick={handleSignOut} className="hover:underline">
              サインアウト
            </button>
            {/* <div>{currentUser}</div> */}
          </div>
        )}
        {currentUser && (
          <button
            className="md:hidden text-gray-50 focus:outline-none"
            onClick={toggleDrawer}
          >
            <HiMenu />
          </button>
        )}
      </header>

      {isDrawerOpen && (
        <div className="fixed top-0 right-0 h-full w-full bg-gray-100 bg-opacity-70 z-50">
          <div className="fixed top-0 right-0 h-full w-2/3 bg-white overflow-y-auto">
            <div className="p-4">
              <Link href="/components/TopPage" passHref>
                <div className="w-full p-2 border-b border-gray-500">
                  <button
                    className="w-full p-4  bg-teal-100 font-bold"
                    onClick={closeDrawer}
                  >
                    TOP
                  </button>
                </div>
              </Link>
              <Link href="/components/TimeLine" passHref>
                <div className="w-full p-2 border-b border-gray-500">
                  <button
                    className="w-full p-4 bg-teal-100 font-bold"
                    onClick={closeDrawer}
                  >
                    タイムライン
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
              <div className="w-full p-2 border-b border-gray-500">
                <button
                  className="w-full p-4 bg-teal-100 font-bold"
                  onClick={handleSignOut}
                >
                  サインアウト
                </button>
              </div>
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
