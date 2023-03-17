import React, { useState } from "react";
import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import ThemeChanger from "./ThemeChanger";

import CoinimLogo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-18 w-full items-center justify-center border-b border-dark-primary border-opacity-10   px-4 py-2 dark:border-white dark:border-opacity-10  ">
      <nav className="flex w-full max-w-[1440px] items-center justify-between ">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={CoinimLogo} alt="coinim" width={36} height={36} />
          <span className="font-semibold text-blue-500 dark:text-white md:text-lg md:font-bold ">
            Coinim
          </span>
        </Link>
        <div className="hidden items-center gap-4 md:flex">
          <ThemeChanger />
          <Link to={"/"}>
            <button
              type="button"
              className="rounded-lg border border-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-blue-700  transition-colors duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-blue-50 dark:text-white dark:hover:bg-blue-600/10 dark:focus:ring-blue-700 "
            >
              Oturum Aç
            </button>
          </Link>
          <Link to={"/"}>
            <button
              type="button"
              className="rounded-lg bg-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
            >
              Kayıt Ol
            </button>
          </Link>
        </div>
      </nav>
      <MobileMenu />
    </header>
  );
}
