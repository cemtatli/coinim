import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { TbBrandCoinbase } from "react-icons/tb";

export default function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-5 w-10 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white dark:bg-gray-200 "
    >
      <span
        className={`absolute inset-y-0 left-0 flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ${
          theme === "light" ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <TbBrandCoinbase width={16} className=" text-blue-600" />
        ) : (
          <TbBrandCoinbase width={16} className=" text-blue-600" />
        )}
      </span>
    </button>
  );
}
