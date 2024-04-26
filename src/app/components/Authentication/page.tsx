"use client";

import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase_google } from "./SupabaseGoogle";
import { supabase } from "../../../utils/supabaseClient";

export default function Authentication() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const router = useRouter();

  const avatars = [
    "/bear.png",
    "/cat.png",
    "/cow.png",
    "/dog.png",
    "/giraffe.png",
    "/koala.png",
    "/lion.png",
    "/owl.png",
    "/panda.png",
    "/penguin.png",
    "/rhinoceros.png",
    "/shark.png",
    "/sloth.png",
  ];

  const getRandomAvatar = () => {
    // ランダムな画像を取得する関数
    const randomIndex = Math.floor(Math.random() * avatars.length); // ランダムなインデックスを取得
    return avatars[randomIndex]; // ランダムな画像のURLを取得
  };

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

      // Supabaseへのデータの追加
      // ユーザー情報をUserInformationテーブルに追加する
      const { error } = await supabase
        .from("userInformation") // userInformationテーブルを指定
        .insert([
          {
            // 追加するデータを指定
            user_age: 25,
            user_avatar: getRandomAvatar(),
            user_height: 170,
            user_weight: 60,
            user_name: "ゲスト",
            user_account: user?.email ?? "", // accountはログインしているユーザーのメールアドレスとして設定
          },
        ]);

      if (error) {
        console.error("Error adding user information:", error.message);
      } else {
        console.log("User information added successfully");
      }
    }
  };

  useEffect(() => {
    getCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ログインが完了している場合はTopPageにリダイレクトする;
  useEffect(() => {
    if (currentUser !== null) {
      console.log("ルート前");
      router.push("/components/TopPage");
    }
  }, [currentUser, router]);

  return (
    <>
      <div className=" flex flex-col justify-center py-12 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Auth
              supabaseClient={supabase_google}
              appearance={{ theme: ThemeSupa }}
              providers={["google"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
