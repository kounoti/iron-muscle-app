import Image from "next/image";
import React, { useEffect, useState } from "react";
import UserModal from "./UserModal"; // UserModalを追加
import { supabase } from "../../../utils/supabaseClient";

type userInformationProps = {
  account: string;
};

const UserInformation: React.FC<userInformationProps> = ({ account }) => {
  // 編集モーダルの表示状態を管理するstateを追加
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("UserInformation内");

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase
          .from("userInformation")
          .select("*")
          .eq("user_account", account);

        if (error) {
          throw error;
        }

        setUser(data);
      } catch (error: any) {
        console.error("Error fetching user data:", error.message);
      }
    };
    console.log("UserPage内にのfetchUserDataに入れています");
    console.log(account);

    fetchUserData();
  }, [account]);

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-6">
        <div className="flex items-center">
          <Image
            width="500"
            height="500"
            src={user.user_avatar}
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.user_name}</h2>
            <p className="text-gray-500">{user.user_age}歳</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">
            身長: {user.user_height} cm, 体重: {user.user_weight} kg
          </p>
        </div>
        <div className="flex justify-center items-center mt-8">
          {/* 編集ボタンを追加 */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setIsModalOpen(true)}
          >
            プロフィールを編集
          </button>
          {/* 編集モーダルを追加 */}
          <UserModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
