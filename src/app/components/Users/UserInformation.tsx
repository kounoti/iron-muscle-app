import Image from "next/image";
import React from "react";
import { userType } from "./page";

type userInformationProps = {
  user: userType;
};

const UserInformation: React.FC<userInformationProps> = ({ user }) => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-6">
        <div className="flex items-center">
          <Image
            width="500"
            height="500"
            src={user.avatar}
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.age}歳</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">
            身長: {user.height} cm, 体重: {user.weight} kg
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
