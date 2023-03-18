import React, { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun1 } from "iconsax-react";

export default function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Sun1 size="18" variant="Bold" className="text-black  dark:text-white" />
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Moon size="18" variant="Bold" className="text-black dark:text-white" />
        </button>
      )}
    </>
  );
}
