import React, { useState } from "react";
import { Link } from "react-router-dom";

import ThemeChanger from "./ThemeChanger";

import CoinimLogo from "../assets/logo.png";
import { FaFacebookF, FaGithub, FaLink, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center border-t border-dark-primary border-opacity-10 px-4  py-2 dark:border-white dark:border-opacity-5">
      {/* Bilgi */}
      <div className="mt-5 flex w-full items-center justify-center gap-4">
        <Link to="/">
          <img src={CoinimLogo} alt="Coinim Logo" className="h-8 w-8 " />
        </Link>
        <Link to="/">
          {" "}
          <button
            type="button"
            className="rounded-xl border border-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-blue-700  transition-colors duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-blue-50 dark:text-white dark:hover:bg-blue-600/10 dark:focus:ring-blue-700 "
          >
            Bültenimize Abone Olun
          </button>
        </Link>{" "}
      </div>

      {/* LINKS */}
      <div className=" mt-4 flex items-center justify-center gap-4 ">
        <div className="flex flex-wrap items-center justify-center gap-5 ">
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">Ürünler</p>
          </Link>{" "}
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">Kripto API</p>{" "}
          </Link>
          <Link to="/">
            {" "}
            <p className="text-sm text-dark-primary hover:underline dark:text-white">
              Blockchain Gezgini
            </p>{" "}
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">
              Kripto Endeksleri
            </p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">Doodle</p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">İş İlanları</p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">
              Site Haritası
            </p>
          </Link>{" "}
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">Şirket</p>{" "}
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">Hakkımızda</p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">
              Kullanım Koşulları
            </p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">
              Gizlilik Politikası
            </p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">
              Community Rules
            </p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">
              Sorumluluk Reddi
            </p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">Metodoloji</p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">Kariyer</p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">
              Bize katılın!
            </p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">İletişim</p>
          </Link>
          <Link to="/">
            <p className="text-sm text-dark-primary hover:underline dark:text-white">Sözlük</p>
          </Link>
        </div>
      </div>
      {/* SOCIAL MEDIA */}
      <div className="my-4 flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-4 ">
          <Link to="https://cemtatli.dev/" target={"_blank"}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 border-opacity-10 hover:bg-blue-50 dark:border-white dark:border-opacity-5 dark:hover:bg-blue-600/10">
              <FaLinkedinIn size={16} className={"dark:text-white"} target={"_blank"} />
            </div>
          </Link>
          <Link to="https://cemtatli.dev/" target={"_blank"}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 border-opacity-10 hover:bg-blue-50 dark:border-white dark:border-opacity-5 dark:hover:bg-blue-600/10">
              <FaFacebookF size={16} className={"dark:text-white"} />
            </div>
          </Link>
          <Link to="https://cemtatli.dev/" target={"_blank"}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 border-opacity-10 hover:bg-blue-50 dark:border-white dark:border-opacity-5 dark:hover:bg-blue-600/10">
              <FaGithub size={16} className={"dark:text-white"} />
            </div>
          </Link>
          <Link to="https://cemtatli.dev/" target={"_blank"}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 border-opacity-10 hover:bg-blue-50 dark:border-white dark:border-opacity-5 dark:hover:bg-blue-600/10">
              <FaTwitter size={16} className={"dark:text-white"} />
            </div>
          </Link>
          <Link to="https://cemtatli.dev/" target={"_blank"}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 border-opacity-10 hover:bg-blue-50 dark:border-white dark:border-opacity-5 dark:hover:bg-blue-600/10">
              <FaLink size={16} className={"dark:text-white"} />
            </div>
          </Link>
        </div>
      </div>
      {/* HAKLARIMIZ SAKLIDIR */}
      <div className="my-4 flex w-full items-center justify-center border-t border-dark-primary border-opacity-10 text-xs font-medium dark:border-white dark:border-opacity-5 ">
        <p className="mt-4 text-sm text-dark-primary dark:text-white">
          © 2023 Coinim. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
