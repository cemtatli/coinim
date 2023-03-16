import React from "react";
import { Moon, Sun1 } from "iconsax-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Sun1 size="16" variant="Bold" className="text-black  dark:text-white" />
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Moon size="16" variant="Bold" className="text-black dark:text-white" />
        </button>
      )}
    </>
  );
}
