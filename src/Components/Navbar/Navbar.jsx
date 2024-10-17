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
    console.log(e.target.classList.toggle("close"), 'esto que es')
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
            menuRef.current.classList.toggle("nav-menu-visible");
          }}
        >
          <Link to="/">{t("nav.home")}</Link>
          {menu === "/" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("DentalSpecialties");
            menuRef.current.classList.toggle("nav-menu-visible");
          }}
        >
          <Link to="/DentalSpecialties">{t("nav.specialities")}</Link>
          {menu === "DentalSpecialties" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Us");
            menuRef.current.classList.toggle("nav-menu-visible");
          }}
        >
          <Link to="Us">{t("nav.us")}</Link>
          {menu === "Us" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Contactanos");
            menuRef.current.classList.toggle("nav-menu-visible");
          }}
        >
          <Link to="https://api.whatsapp.com/send?phone=3122794831&text=Deseo agendar una cita de valoracion!!" target="_blank" >{t("nav.contact")}</Link>
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
