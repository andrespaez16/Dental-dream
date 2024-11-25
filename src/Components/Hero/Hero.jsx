import React from "react";
import "./Hero.css";
import { Animate } from "react-simple-animate";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Hero = () => {
    const [t, i18n] = useTranslation("global");
  return (
    <div className="hero-principal">
      <div className="hero-left-principal">
        {/* <Animate
          play
          duration={2}
          end={{ opacity: 1, filter: "blur(0)" }}
          start={{ opacity: 0, filter: "blur(10px)" }}
        > */}
          <div>
            <div className="hero-hand-icon">
              <p>{t("home.title_one")}</p>
            </div>
            <p>{t("home.title_two")}</p>
            <p>{t("home.title_three")}.</p>
            {/* <button type="submit" className="hero-latest-btn">
            <Link to="https://api.whatsapp.com/send?phone=3122794831&text=Deseo agendar una cita de valoracion!!" target="_blank" > {t("home.button_text")}</Link>
            </button> */}
          </div>
        {/* </Animate> */}
      </div>
    </div>
  );
};

export default Hero;
