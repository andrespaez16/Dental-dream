import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/LogoEmpresa.png";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const [t, i18n] = useTranslation("global");

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <Link
        to="/"
        onClick={() => {
          setMenu("shop");
        }}
        className="nav-logo"
      >
        <img src={logo} alt="" />
      </Link>
      <img
        onClick={dropdown_toggle}
        className="nav-dropdown"
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">{t("nav.home")}</Link>
          {menu === "/" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("DentalSpecialties");
          }}
        >
          <Link to="/DentalSpecialties">Especialidades</Link>
          {menu === "DentalSpecialties" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Us");
          }}
        >
          <Link to="Us">Nosotros</Link>
          {menu === "Us" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Contactanos");
          }}
        >
          <Link to="/kids">Contactanos</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
        <li className="p-4">
          <button
            className="bg-white w-[30px] h-[30px] rounded-full font-medium mx-auto md:mx-0 usa"
            onClick={() => i18n.changeLanguage("en")}
          ></button>
        </li>
        <li className="p-4">
          <button
            className="bg-white w-[30px] h-[30px] rounded-full font-medium mx-auto md:mx-0 col"
            onClick={() => i18n.changeLanguage("es")}
          ></button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
