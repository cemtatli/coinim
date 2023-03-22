import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import WatchList from "../components/WatchList";

export default function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  if (user) {
    return (
      <div className="mx-auto my-5 flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-5 2xl:px-0">
        <div className="flex w-full max-w-[500px] flex-col items-center justify-center gap-2">
          <h3 className="text-center text-3xl font-bold text-gray-800 dark:text-white">Hesabım</h3>
          <div className="mt-2 flex w-full items-center justify-center text-center text-base text-black dark:text-white">
            <p>
              Hoşgeldin,<span className="font-medium text-blue-500"> {user?.email}</span> 👋
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 text-black dark:text-white ">
          <h2 className="w-full text-start text-2xl font-bold dark:text-white"> İzleme Listesi</h2>
          <WatchList />
        </div>
      </div>
    );
  }
}
