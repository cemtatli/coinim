import React, { useState } from "react";
import CoinimLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";
import { CloseCircle, HambergerMenu, Home, User, Link21 } from "iconsax-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex h-18 w-full items-center justify-center border-b border-dark-primary border-opacity-10 bg-zinc-50 px-4 py-2 dark:border-white dark:border-opacity-10 dark:bg-dark-primary">
      {/* Desktop Gorunum */}
      <nav className="flex w-full max-w-7xl items-center justify-between ">
        <Link to={"/"} className="flex items-center gap-2">
          {/* Link to="/" eklenecek */}
          <img src={CoinimLogo} alt="coinim" width={36} height={36} />
          <span className="font-semibold text-blue-500 dark:text-white md:text-lg md:font-bold ">
            Coinim.com
          </span>
        </Link>
        {/* Oturum Aç & Kayıt Ol  */}
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
      {/* Mobile Gorunum */}
      <button onClick={handleMenu} className="block md:hidden">
        {isOpen ? (
          <CloseCircle size="24" className="text-black focus:animate-pulse dark:text-white" />
        ) : (
          <HambergerMenu size="24" className="text-black dark:text-white" />
        )}
      </button>
      {/* Mobile Menu */}
      <div
        className={
          isOpen
            ? "mobile fixed left-0 top-18 z-20 flex w-full  flex-col items-center justify-between gap-4 bg-zinc-50  duration-200 ease-in-out dark:bg-dark-primary md:hidden"
            : "mobile fixed -left-full top-18 z-20 w-full bg-zinc-50 pb-10 duration-200 ease-in-out dark:bg-dark-primary md:hidden"
        }
      >
        <ul className="flex w-full flex-col">
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            {/*             <Home size="16" className="text-black dark:text-white" variant="Bold" /> */}
            <Link to={"/"}>Anasayfa</Link>
          </li>
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            {/*             <User size="16" className="text-black dark:text-white" variant="Bold" /> */}
            <Link to={"/Account"}>Profil</Link>
          </li>
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            {/*             <Link21 size="16" className="text-black dark:text-white" variant="Bold" /> */}
            <Link to={"https://twitter.com/vaycem"} target={"_blank"}>
              Twitter
            </Link>
          </li>
          <li className="flex cursor-pointer items-center gap-2  border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            {/*             <Link21 size="16" className="text-black dark:text-white" variant="Bold" /> */}
            <Link to={"https://github.com/cemtatli"} target={"_blank"}>
              GitHub
            </Link>
          </li>
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            <ThemeChanger /> Tema Değiştir
          </li>
        </ul>
        <ul className="flex w-full flex-col gap-4 pb-10">
          <li>
            <Link to={"/signIn"} className="flex items-center justify-center">
              <button
                type="button"
                className="w-full max-w-[90%] rounded-lg border border-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-blue-700  transition-colors duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-blue-50 dark:text-white dark:hover:bg-blue-600/10 dark:focus:ring-blue-700 "
              >
                Oturum Aç
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/signUp"} className="flex items-center justify-center">
              <button
                type="button"
                className="w-full max-w-[90%] rounded-lg bg-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
              >
                Kayıt Ol
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
