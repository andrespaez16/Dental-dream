import React from "react";
import "./Hero.css";
import { Animate } from "react-simple-animate";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const [t, i18n] = useTranslation("global");
  return (
    <div className="hero">
      <div className="hero-left"></div>
      <div className="hero-left">
        <Animate
          play
          duration={2}
          end={{ opacity: 1, filter: "blur(0)" }}
          start={{ opacity: 0, filter: "blur(10px)" }}
        >
          <div>
            <div className="hero-hand-icon">
              <p>{t("home.title_one")}</p>
            </div>
            <p>{t("home.title_two")}</p>
            <p>{t("home.title_three")}.</p>
            <button type="submit" className="hero-latest-btn">
            {t("home.button_text")}
            </button>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default Hero;
