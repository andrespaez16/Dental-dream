import React from "react";
import "./Service.css";
import "../Assets/reabiltacion.jpg";
const Service = (props) => {
  console.log(props.info, "estaisoos");
  return (
    <div className="service flex flex-wrap flex-row">
      {props.info.direction ? (
        <>
          <div className="service-text fade-in-left">
            <h2>{props.info.title}</h2>
            <p>{props.info.text}</p>
          </div>
          <div className={props.info.classPhoto}></div>
        </>
      ) : (
        <>
          <div className={props.info.classPhoto}></div>
          <div className="service-text fade-in-right">
            <h2>{props.info.title}</h2>
            <p>{props.info.text}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Service;
