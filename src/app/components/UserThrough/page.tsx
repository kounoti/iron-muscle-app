"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page: React.FC = () => {
  const router = useRouter();

  //ページリダイレクト時にユーザーのメールアドレスをuserAccountに格納する
  useEffect(() => {
    router.push("/components/Users");
    router.refresh();
  }, [router]);

  return <></>;
};

export default Page;
