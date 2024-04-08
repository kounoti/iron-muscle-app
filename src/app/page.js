// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// require("./globals.css");
// var page_1 = require("./components/Authentication/page");
// function Home() {
//     return (<>
//       <page_1.default />
//       {/* <div className="flex justify-center items-center m-10">
//           <Link
//             href="/components/Training"
//             className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-10 px-10 rounded border-2 border-blue-400 sm:text-5xl text-2xl "
//           >
//             トレーニング開始
//           </Link>

//         </div> */}
//     </>);
// }
// exports.default = Home;

// "use client";

// import { useEffect, useState } from "react";

import Authentication from "./components/Authentication/page";
import "./globals.css";
import { supabase_google } from "./components/Authentication/SupabaseGoogle";

// import TopPage from "./components/TopPage/TopPage";

export default function Home() {
  // const [currentUser, setCurrentUser] = useState<string | null>(null);

  // // 現在ログインしているユーザーを取得する処理
  // const getCurrentUser = async () => {
  //   // ログインのセッションを取得する処理
  //   const { data } = await supabase_google.auth.getSession();
  //   // セッションがあるときだけ現在ログインしているユーザーを取得する
  //   if (data.session !== null) {
  //     // supabaseに用意されている現在ログインしているユーザーを取得する関数
  //     const {
  //       data: { user },
  //     } = await supabase_google.auth.getUser();
  //     // currentUserにユーザーのメールアドレスを格納
  //     setCurrentUser(user?.email ?? null);
  //   }
  // };
  // useEffect(() => {
  //   getCurrentUser();
  // }, []);

  return (
    <>
      {/* {currentUser === null ? <Authentication /> : <TopPage />} */}

      <Authentication />
      {/* <div className="flex justify-center items-center m-10">
        <Link
          href="/components/Training"
          className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-10 px-10 rounded border-2 border-blue-400 sm:text-5xl text-2xl "
        >
          トレーニング開始
                  </Link>

      </div> */}
    </>
  );
}
