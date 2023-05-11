import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "@/context/AuthContext";
import WatchList from "@/components/WatchList";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Account = () => {
  const { t, i18n } = useTranslation();
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      toast.error(e.message);
    }
  };

  if (user) {
    return (
      <>
        <Helmet>
          <title>Coinim | {t("title")} </title>
        </Helmet>
        <div className="fluid">
          <div className="my-5 flex h-full w-full  flex-col items-center justify-start gap-2">
            <h3 className="text-center text-3xl font-bold text-gray-900 dark:text-white">{t("title")}</h3>
            <div className="mt-2 flex w-full items-center justify-center text-center text-base text-gray-900 dark:text-white">
              <p>
                {t("welcome")} <span className="font-medium text-blue-500">{user?.email} 👋</span>
              </p>
            </div>
            <div className="my-5 flex w-full flex-col items-center justify-center gap-4 text-gray-900 dark:text-white">
              <h2 className="w-full text-2xl font-bold text-gray-900 dark:text-white">{t("watchlistTitle")}</h2>
              <WatchList />
            </div>
          </div>
        </div>
      </>
    );
  }

  return null; // Kullanıcı girişi yapılmamışsa hiçbir şey gösterme
};

export default Account;
