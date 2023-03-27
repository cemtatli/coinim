import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "@/context/AuthContext";

import MobileMenu from "./MobileMenu";
import ThemeChanger from "./ThemeChanger";

import CoinimLogo from "@/assets/logo.png";

export default function Header() {
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

  return (
    <header className="sticky top-0 z-10 flex h-18 w-full items-center justify-center border-b border-dark-primary border-opacity-10 px-4 py-2 dark:border-white dark:border-opacity-10  ">
      <nav className="flex w-full max-w-[1440px] items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={CoinimLogo} alt="coinim" width={40} height={40} />
          <span className="text-lg font-semibold text-blue-500 dark:text-white md:text-xl md:font-bold ">
            Coinim
          </span>
        </Link>
        <div className="hidden items-center gap-4 md:flex">
          <ThemeChanger />

          {user?.email ? (
            <div className="flex items-center gap-2">
              <Link
                to="/Account"
                className="rounded-lg border border-blue-700 py-1.5 px-4 text-center text-xs font-semibold text-blue-700  transition-colors duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-blue-50 dark:text-white dark:hover:bg-blue-600/10 dark:focus:ring-blue-700 "
              >
                Takip Listem
              </Link>
              <button
                onClick={handleSignOut}
                type="button"
                className="rounded-lg bg-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
              >
                Çıkış Yap
              </button>
            </div>
          ) : (
            <div className="hidden gap-4 md:flex">
              <Link to={"/SignIn"}>
                <button
                  type="button"
                  className="rounded-lg border border-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-blue-700  transition-colors duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-blue-50 dark:text-white dark:hover:bg-blue-600/10 dark:focus:ring-blue-700 "
                >
                  Oturum Aç
                </button>
              </Link>
              <Link to={"/SignUp"}>
                <button
                  type="button"
                  className="rounded-lg bg-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
                >
                  Kayıt Ol
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
      <MobileMenu />
    </header>
  );
}
