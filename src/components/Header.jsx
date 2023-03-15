import React from "react";
import CoinimLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";

export default function Header() {
  return (
    <header className="flex items-center justify-center h-18 w-full px-4 py-2 border-b border-opacity-10 dark:shadow-md dark:border-white dark:border-opacity-20 border-dark-primary bg-zinc-50 dark:bg-dark-primary">
      <nav className="flex items-center justify-between max-w-7xl w-full">
        <Link to={"/"}>
          {/*     // Link to="/" eklenecek */}
          <img
            src={CoinimLogo}
            alt="coinim"
            width={32}
            height={32}
            className=" cursor-pointer hover:animate-spin "
          />
        </Link>
        {/* Oturum Aç & Kayıt Ol  */}
        <div className="flex items-center gap-4">
          <ThemeChanger />
          <Link to={"/"}>
            <button
              type="button"
              class="px-4 py-1.5 text-xs font-semibold text-center text-blue-700 border border-blue-700 rounded-lg  focus:ring-2 focus:outline-none dark:hover:bg-blue-600/10  focus:ring-blue-50 dark:focus:ring-blue-700 dark:text-white transition-colors duration-200 ease-in-out "
            >
              Oturum Aç
            </button>
          </Link>
          <Link to={"/"}>
            <button
              type="button"
              class="px-4 py-1.5 text-xs font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700 transition-colors duration-200 ease-in-out"
            >
              Kayıt Ol
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
