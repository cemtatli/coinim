import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageChanger = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center gap-2 rounded-lg border border-gray-100 py-1.5 px-3 text-center text-xs transition-colors duration-200 ease-in-out hover:border-gray-200 focus:outline-none dark:border-gray-700 dark:text-white"
      >
        <ReactCountryFlag
          countryCode={i18n.language === "tr" ? "TR" : i18n.language === "de" ? "DE" : i18n.language === "kr" ? "KR" : "US"}
          svg
          style={{
            width: "1.2rem",
            height: "1.2rem",
          }}
          title={i18n.language}
        />
        {i18n.language === "tr" ? t("Türkçe") : i18n.language === "de" ? t("Deutsch") : i18n.language === "kr" ? t("한국어") : t("English")}
      </button>
      {isMenuOpen && (
        <div className="absolute -right-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 md:-right-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => changeLanguage("tr")}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:focus:bg-gray-700 dark:focus:text-gray-100"
              role="menuitem"
            >
              <ReactCountryFlag countryCode="TR" svg className="mr-2 text-lg" title="TR" />
              {t("Türkçe")}
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:focus:bg-gray-700 dark:focus:text-gray-100"
              role="menuitem"
            >
              <ReactCountryFlag countryCode="US" svg className="mr-2 text-lg" title="US" />
              {t("English")}
            </button>
            <button
              onClick={() => changeLanguage("de")}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:focus:bg-gray-700 dark:focus:text-gray-100"
              role="menuitem"
            >
              <ReactCountryFlag countryCode="DE" className="mr-2 text-lg" svg title="DE" />
              {t("Deutsch")}
            </button>
            <button
              onClick={() => changeLanguage("kr")}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:focus:bg-gray-700 dark:focus:text-gray-100"
              role="menuitem"
            >
              <ReactCountryFlag countryCode="KR" svg className="mr-2 text-lg" title="KR" />
              {t("한국어")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageChanger;
