import React from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageChanger = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <button
        className="flex items-center gap-2 rounded-lg py-1.5 text-center text-sm  transition-colors duration-200 ease-in-out focus:outline-none dark:text-white "
        onClick={toggleLanguage}
      >
        {i18n.language === "tr" ? (
          <>
            <ReactCountryFlag
              countryCode="TR"
              svg
              style={{
                width: "1rem",
                height: "1rem",
              }}
              title="TR"
            />
            <span>Türkçe</span>
          </>
        ) : (
          <>
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: "1rem",
                height: "1rem",
              }}
              title="US"
            />
            <span>English</span>
          </>
        )}
      </button>
    </div>
  );
};

export default LanguageChanger;
