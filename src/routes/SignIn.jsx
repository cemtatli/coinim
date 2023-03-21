import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="mx-auto my-24 flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-5 2xl:px-0">
      <div className="flex w-full max-w-[500px] flex-col items-center justify-center gap-2">
        <h3 className="text-center text-3xl font-bold text-gray-800 dark:text-white">Oturum Aç</h3>
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          Coinim'e hoşgeldin! Lütfen giriş yapmak için aşağıdaki bilgileri giriniz.
        </p>
      </div>
      <form className="mt-8 flex w-full max-w-[500px] flex-col">
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-400">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-posta adresinizi giriniz"
            className="mt-2 rounded-lg border border-gray-300 px-4 py-2 placeholder:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <label htmlFor="password" className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Şifre
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Şifrenizi giriniz"
            className="mt-2 rounded-lg border border-gray-300 px-4 py-2 placeholder:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <div className="mt-4 flex flex-col items-center justify-between">


            <button
              type="submit"
              className="mt-4 h-12  w-full rounded-lg border border-transparent bg-blue-700 py-2 px-4 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-50 active:bg-blue-800"
            >
              Oturum Aç
            </button>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Hesabın yok mu?{" "}
              <Link to={"/SignUp"}>
                <a href="#" className="text-blue-500 hover:underline dark:text-blue-400">
                  Kayıt Ol
                </a>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
