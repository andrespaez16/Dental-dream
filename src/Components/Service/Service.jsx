import React from "react";
import "./Service.css";
import "../Assets/reabiltacion.jpg";
import { useTranslation } from "react-i18next";
const Service = (props) => {
  const [t, i18n] = useTranslation("global");

  console.log(props.info, "estaisoos");
  return (
    <div className="service flex flex-wrap flex-row">
      {props.info.direction ? (
        <>
          <div className="service-text fade-in-left">        
            <h2>{t(props.info.title)}</h2>
            <p>{t(props.info.text)}</p>
          </div>
          <div className={t(props.info.classPhoto)}></div>
        </>
      ) : (
        <>
          <div className={props.info.classPhoto}></div>
          <div className="service-text fade-in-right">
            <h2>{t(props.info.title)}</h2>
            <p>{t(props.info.text)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Service;
