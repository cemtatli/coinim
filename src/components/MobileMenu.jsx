import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { UserAuth } from "@/context/AuthContext";
import ThemeChanger from "./ThemeChanger";
import { HambergerMenu } from "iconsax-react";
import { RiCloseFill } from "react-icons/ri";
import LanguageChanger from "./LanguageChanger";

export default function MobileMenu() {
  const { t } = useTranslation();
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <button onClick={handleNav} className="block md:hidden">
        {nav ? (
          <RiCloseFill size="20" className="text-gray-900 focus:animate-pulse dark:text-white" />
        ) : (
          <HambergerMenu size="24" className="text-gray-900 dark:text-white" />
        )}
      </button>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "mobile-hscreen  fixed left-0 top-18 z-20 flex w-full flex-col items-center gap-5 bg-zinc-50  duration-200 ease-in-out dark:bg-dark-primary md:hidden"
            : "mobile-hscreen  fixed -left-full top-18 z-20 w-full bg-zinc-50 duration-200 ease-in-out dark:bg-dark-primary md:hidden"
        }
      >
        <ul className="flex w-full flex-col">
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            <Link onClick={handleNav} to={"/"}>
              {t("MobileMenu.home")}
            </Link>
          </li>

          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            <Link to={"https://twitter.com/vaycem"} target={"_blank"}>
              {t("MobileMenu.twitter")}
            </Link>
          </li>
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            <Link to={"https://github.com/cemtatli"} target={"_blank"}>
              {t("MobileMenu.github")}
            </Link>
          </li>
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            <ThemeChanger /> {t("MobileMenu.themeChanger")}
          </li>
          <li className="flex cursor-pointer items-center gap-2 border-b border-dark-primary border-opacity-10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-dark-primary/5 dark:border-white dark:border-opacity-10 dark:text-white dark:hover:bg-blue-100/5 dark:hover:transition-colors">
            <LanguageChanger />
          </li>
        </ul>
        <ul className="flex w-full flex-col gap-2.5">
          {user ? (
            <>
              <li>
                <Link onClick={handleNav} to={"/Account"} className="flex items-center justify-center">
                  <button
                    type="button"
                    className="h-8 w-full max-w-[90%] rounded-lg border border-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-blue-700  transition-colors duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-blue-50 dark:text-white dark:hover:bg-blue-600/10 dark:focus:ring-blue-700 "
                  >
                    {t("MobileMenu.watchlist")}
                  </button>
                </Link>
              </li>
              <li>
                <Link onClick={handleNav} className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                    className="h-8 w-full max-w-[90%] rounded-lg bg-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
                  >
                    {t("MobileMenu.signOut")}
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link onClick={handleNav} to={"/SignIn"} className="flex items-center justify-center">
                  <button
                    type="button"
                    className="h-8 w-full  max-w-[90%] rounded-lg border border-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-blue-700  transition-colors duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-blue-50 dark:text-white dark:hover:bg-blue-600/10 dark:focus:ring-blue-700 "
                  >
                    {t("MobileMenu.signIn")}
                  </button>
                </Link>
              </li>
              <li>
                <Link onClick={handleNav} to={"/SignUp"} className="flex items-center justify-center">
                  <button
                    type="button"
                    className="h-8 w-full max-w-[90%] rounded-lg bg-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
                  >
                    {t("MobileMenu.signUp")}
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
