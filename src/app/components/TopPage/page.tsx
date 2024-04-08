import { useEffect, useState } from "react";
import TopPage from "./TopPage";
import { supabase_google } from "../Authentication/SupabaseGoogle";
import Authentication from "../Authentication/page";

export default function Page() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

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
  useEffect(() => {
    getCurrentUser();
  }, []);

  return <>{currentUser === null ? <Authentication /> : <TopPage />}</>;
}
