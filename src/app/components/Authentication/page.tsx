/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
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
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex];
  };

  const getCurrentUser = async () => {
    const { data } = await supabase_google.auth.getSession();
    if (data.session !== null) {
      const {
        data: { user },
      } = await supabase_google.auth.getUser();
      setCurrentUser(user?.email ?? null);

      const { error } = await supabase.from("userInformation").insert([
        {
          user_age: 25,
          user_avatar: getRandomAvatar(),
          user_height: 170,
          user_weight: 60,
          user_name: "ゲスト",
          user_account: user?.email ?? "",
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
  }, []);

  useEffect(() => {
    if (currentUser !== null) {
      router.push("/components/TopPage");
    }
  }, [currentUser, router]);

  return (
    <>
      <div className="flex flex-col justify-center py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ログインフォーム
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Auth
              supabaseClient={supabase_google}
              appearance={{ theme: ThemeSupa }}
              providers={["google"]}
              localization={{
                variables: {
                  sign_in: {
                    email_label: "メールアドレス",
                    password_label: "パスワード",
                    email_input_placeholder: "メールアドレスを入力",
                    password_input_placeholder: "パスワードを入力",
                    button_label: "サインイン",
                    loading_button_label: "読み込み中...",
                    social_provider_text: "{{provider}}でサインイン",
                    link_text: "アカウントをお持ちでない場合はこちら",
                  },
                  sign_up: {
                    email_label: "メールアドレス",
                    password_label: "パスワード",
                    email_input_placeholder: "メールアドレスを入力",
                    password_input_placeholder: "パスワードを入力",
                    button_label: "サインアップ",
                    loading_button_label: "読み込み中...",
                    social_provider_text: "{{provider}}でサインアップ",
                    link_text: "アカウントをお持ちの場合はこちら",
                  },
                  forgotten_password: {
                    email_label: "メールアドレス",
                    email_input_placeholder: "メールアドレスを入力",
                    button_label: "送信",
                    loading_button_label: "読み込み中...",
                    link_text: "パスワードを忘れた場合はこちら",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
