import React from "react";
import { Link } from "react-router-dom";

import CoinimLogo from "@/assets/logo.png";

const Error404 = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center ">
      <h1 className="mb-2 text-center text-6xl font-bold text-blue-600 dark:text-blue-400">Oops!</h1>
      <h2 className="mb-6 text-center text-4xl font-bold text-gray-800 dark:text-gray-200 ">404 - Sayfa Bulunamadı</h2>
      <p className="mb-10 text-center font-medium text-gray-600 dark:text-gray-300">
        Aradığınız sayfa mevcut değil veya erişiminiz engellenmiş olabilir.
      </p>
      <Link to="/">
        <button
          type="button"
          className="rounded-lg bg-blue-700 px-6 py-3 text-center text-xs font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
        >
          Anasayfaya Git
        </button>
      </Link>
    </div>
  );
};

export default Error404;
