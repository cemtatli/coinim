import React, { useState } from "react";
import { Link } from "react-router-dom";

import ThemeChanger from "./ThemeChanger";

import CoinimLogo from "../assets/logo.png";
import { FaFacebookF, FaGithub, FaLink, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" flex h-52 w-full flex-col items-center justify-center border-t border-dark-primary border-opacity-10  px-4 py-2  dark:border-white dark:border-opacity-5">
      {/* Bilgi */}
      <div className="flex w-full items-center justify-center py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={CoinimLogo} alt="Coinim Logo" className="h-8 w-8 md:h-8 md:w-8 " />
          <span className="font-semibold text-blue-500 dark:text-white md:text-lg md:font-bold">
            Coinim
          </span>
        </Link>
      </div>
      {/* SOCIAL MEDIA */}
      <div className="my-4 flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2 sm:gap-4 ">
          <Link to="https://www.linkedin.com/in/cemtatli/" target={"_blank"}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500 border-opacity-10 hover:bg-blue-50 dark:border-white dark:border-opacity-5 dark:hover:bg-blue-600/10 sm:h-10 sm:w-10">
              <FaLinkedinIn size={16} className={"dark:text-white"} target={"_blank"} />
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/cemtatli/" target={"_blank"}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500 border-opacity-10 hover:bg-blue-50 dark:border-white dark:border-opacity-5 dark:hover:bg-blue-600/10 sm:h-10 sm:w-10">
              <FaFacebookF size={16} className={"dark:text-white"} />
            </div>
          </Link>
          <Link to="https://github.com/cemtatli" target={"_blank"}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500 border-opacity-10 hover:bg-blue-50 dark:border-white dark:border-opacity-5 dark:hover:bg-blue-600/10 sm:h-10 sm:w-10">
              <FaGithub size={16} className={"dark:text-white"} />
            </div>
          </Link>
          <Link to="https://twitter.com/vaycem" target={"_blank"}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500 border-opacity-10 hover:bg-blue-50 dark:border-white dark:border-opacity-5 dark:hover:bg-blue-600/10 sm:h-10 sm:w-10">
              <FaTwitter size={16} className={"dark:text-white"} />
            </div>
          </Link>
          <Link to="https://cemtatli.dev/" target={"_blank"}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500 border-opacity-10 hover:bg-blue-50 dark:border-white dark:border-opacity-5 dark:hover:bg-blue-600/10 sm:h-10 sm:w-10">
              <FaLink size={16} className={"dark:text-white"} />
            </div>
          </Link>
        </div>
      </div>
      {/* HAKLARIMIZ SAKLIDIR */}
      <div className=" flex w-full items-center justify-center border-t border-dark-primary border-opacity-10 text-xs font-medium dark:border-white dark:border-opacity-5 ">
        <p className="my-4 text-xs text-dark-primary dark:text-white sm:text-sm">
          © 2023 Coinim. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
