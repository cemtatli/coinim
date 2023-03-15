import React, { useState } from "react";
import CoinimLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";
import { CloseCircle, HambergerMenu, Home, User } from "iconsax-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-center h-18 w-full px-4 py-2 border-b border-opacity-10 dark:border-white dark:border-opacity-10 border-dark-primary bg-zinc-50 dark:bg-dark-primary">
      <nav className="flex items-center justify-between max-w-7xl w-full ">
        <Link to={"/"} className="flex items-center gap-2">
          {/* Link to="/" eklenecek */}
          <img
            src={CoinimLogo}
            alt="coinim"
            width={32}
            height={32}
            className="lg:hover:animate-spin "
          />
          <span className="dark:text-white font-semibold text-blue-500">Coinim.com</span>
        </Link>
        {/* Oturum Aç & Kayıt Ol  */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeChanger />
          <Link to={"/"}>
            <button
              type="button"
              className="px-4 py-1.5 text-xs font-semibold text-center text-blue-700 border border-blue-700 rounded-lg  focus:ring-2 focus:outline-none dark:hover:bg-blue-600/10  focus:ring-blue-50 dark:focus:ring-blue-700 dark:text-white transition-colors duration-200 ease-in-out "
            >
              Oturum Aç
            </button>
          </Link>
          <Link to={"/"}>
            <button
              type="button"
              className="px-4 py-1.5 text-xs font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700 transition-colors duration-200 ease-in-out"
            >
              Kayıt Ol
            </button>
          </Link>
        </div>
      </nav>
      {/* Mobile Gorunum */}
      <button onClick={handleMenu} className="md:hidden block">
        {isOpen ? (
          <CloseCircle size="24" className="text-black dark:text-white focus:animate-pulse" />
        ) : (
          <HambergerMenu size="24" className="text-black dark:text-white" />
        )}
      </button>
      <div
        className={
          isOpen
            ? "flex flex-col md:hidden gap-4  items-center justify-between mobile w-full fixed left-0 top-18 pb-10  z-20 ease-in-out duration-200 bg-zinc-50 dark:bg-dark-primary"
            : "-left-full md:hidden mobile w-full fixed top-18 pb-10 z-20 ease-in-out duration-200 bg-zinc-50 dark:bg-dark-primary"
        }
      >
        <ul className="flex flex-col w-full">
          <li className="font-medium flex items-center gap-2 border-b border-dark-primary border-opacity-10 dark:text-white dark:border-white dark:border-opacity-10 p-2 text-sm hover:bg-dark-primary/5 transition-colors cursor-pointer dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            <Home size="16" className="text-black dark:text-white" variant="Bold" />
            <Link to={"/"}>Anasayfa</Link>
          </li>
          <li className="font-medium border-b flex items-center gap-2 border-dark-primary border-opacity-10 dark:text-white dark:border-white dark:border-opacity-10 p-2 text-sm hover:bg-dark-primary/5 transition-colors cursor-pointer dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            <User size="16" className="text-black dark:text-white" variant="Bold" />
            <Link to={"/"}>Profil</Link>
          </li>
          <li className="font-medium border-b flex items-center gap-2 border-dark-primary border-opacity-10 dark:text-white dark:border-white dark:border-opacity-10 p-2 text-sm hover:bg-dark-primary/5 transition-colors cursor-pointer dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            <ThemeChanger /> Tema Değiştir
          </li>
        </ul>
        <ul className="flex flex-col w-full gap-4">
          <li>
            <Link to={"/signin"} className="flex items-center justify-center">
              <button
                type="button"
                className="px-4 py-1.5 w-full max-w-[90%] text-xs font-semibold text-center text-blue-700 border border-blue-700 rounded-lg  focus:ring-2 focus:outline-none dark:hover:bg-blue-600/10  focus:ring-blue-50 dark:focus:ring-blue-700 dark:text-white transition-colors duration-200 ease-in-out "
              >
                Oturum Aç
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/signup"} className="flex items-center justify-center">
              <button
                type="button"
                className="px-4 py-1.5 w-full max-w-[90%] text-xs font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700 transition-colors duration-200 ease-in-out"
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
