import React from "react";
import "./Service.css";
import "../Assets/reabiltacion.jpg";
import { useTranslation } from "react-i18next";
const Service = (props) => {
  const [t, i18n] = useTranslation("global");

  console.log(props.info, "estaisoos");
  return (
    <div className="service">
      {props.info.direction ? (
        <div className="left-contain">
          <div className="service-contain  fade-in-left">        
            <h2>{t(props.info.title)}</h2>
            <p className="service-text">{t(props.info.text)}</p>
          </div>
          <div className={t(props.info.classPhoto)}></div>
        </div>
      ) : (
        <div className="right-contain">
          <div className={props.info.classPhoto}></div>
          <div className="service-contain  fade-in-right">
            <h2>{t(props.info.title)}</h2>
            <p className="service-text">{t(props.info.text)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
