import React from "react";
import "./NewsLetter.css";
import { Animate } from "react-simple-animate";
import { useTranslation } from "react-i18next";
const NewsLetter = () => {
  const [t, i18n] = useTranslation("global");
  return (
    
    <div className="mision-and-vision">
      <Animate
        play
        duration={2}
        end={{ opacity: 1, filter: "blur(0)" }}
        start={{ opacity: 0, filter: "blur(10px)" }}
      >
        <div className="mision">
          <h2 className="mision-title">{t("contact.title_mision")}</h2>
          <p className="mision-text">
          {t("contact.text_mision")}
          </p>
        </div>
      </Animate>

      <Animate
        play
        duration={2.5}
        end={{ opacity: 1, filter: "blur(0)" }}
        start={{ opacity: 0, filter: "blur(10px)" }}
      >
        <div className="vision">
          <h2 className="vision-title">{t("contact.text_vision")}</h2>
          <p className="vision-text">
          {t("contact.title_vision")}
          </p>
        </div>
      </Animate>
    </div>
  );
};

export default NewsLetter;
