import React, { useState } from "react";
import { Link } from "react-router-dom";

import ThemeChanger from "./ThemeChanger";
import { HambergerMenu } from "iconsax-react";
import { RiCloseFill } from "react-icons/ri";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Gorunum */}
      <button onClick={handleMenu} className="block md:hidden">
        {isOpen ? (
          <RiCloseFill size="20" className="text-black focus:animate-pulse dark:text-white" />
        ) : (
          <HambergerMenu size="24" className="text-black dark:text-white" />
        )}
      </button>
      {/* Mobile Menu */}
      <div
        className={
          isOpen
            ? "mobile fixed left-0 top-18 z-20 flex w-full flex-col items-center gap-5 bg-zinc-50  duration-200 ease-in-out dark:bg-dark-primary md:hidden"
            : "mobile fixed -left-full top-18 z-20 w-full bg-zinc-50 duration-200 ease-in-out dark:bg-dark-primary md:hidden"
        }
      >
        <ul className="flex w-full flex-col">
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            {/*             <Home size="16" className="text-black dark:text-white" variant="Bold" /> */}
            <Link to={"/"}>Anasayfa</Link>
          </li>
          <li className="flex cursor-pointer items-center  gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            {/* <Star1 size="16" className="text-black  dark:text-white" variant="TwoTone"/>  */}
            <Link to={"/Account"}>İzleme Listesi </Link>
          </li>
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            {/*             <Link21 size="16" className="text-black dark:text-white" variant="Bold" /> */}
            <Link to={"https://twitter.com/vaycem"} target={"_blank"}>
              Twitter <span>👋</span>
            </Link>
          </li>
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            {/*             Link21 size="16" className="text-black dark:text-white" variant="Bold" /> */}
            <Link to={"https://github.com/cemtatli"} target={"_blank"}>
              GitHub <span>👋</span>
            </Link>
          </li>
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            <ThemeChanger />
            Tema Değiştir
          </li>
        </ul>
        <ul className="flex w-full flex-col gap-2.5">
          <li>
            <Link to={"/SignIn"} className="flex items-center justify-center">
              <button
                type="button"
                className="w-full max-w-[90%]  rounded-lg border border-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-blue-700  transition-colors duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-blue-50 dark:text-white dark:hover:bg-blue-600/10 dark:focus:ring-blue-700 "
              >
                Oturum Aç
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/SignUp"} className="flex items-center justify-center">
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
    </>
  );
}
