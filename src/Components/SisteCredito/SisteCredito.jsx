import React from "react";
import "./SisteCredito.css";

import { useTranslation } from "react-i18next";

const SisteCredito = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="content-pay-method">
      <h2>Metodos de pago</h2>
      <div className="pay-container">
        <div className="siste-image"></div>
        <div className="pse-image"></div>

        <div className="nequi-image"></div>
        <div className="bacolombia-image"></div>
      </div>
    </div>
  );
};

export default SisteCredito;
