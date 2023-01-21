import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const MultiLanguage = () => {
  const { t } = useTranslation();

  const [lang, setLang] = useState("en");
  const languages = [
    { value: "", text: "Options" },
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "mr", text: "Marathi" },
    { value: "or", text: "Oriya" },
    { value: "gu", text: "Gujrati" },
    { value: "kn", text: "Kannda" },
  ];
  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };
  return (
    <>
      {" "}
      <h1>{t("welcome")}</h1>
      <label>{t("choose")}</label>
      <select value={lang} onChange={handleChange}>
        {languages.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default MultiLanguage;
