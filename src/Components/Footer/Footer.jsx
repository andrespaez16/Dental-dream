import React from "react";
import "./Footer.css";
import logo from "../Assets/LogoEmpresa.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    // <div className='footer'>
    //   <div className="footer-logo">
    //     <img src={footer_logo} alt="" />
    //     <p>SHOPPER</p>
    //   </div>
    //   <ul className="footer-links">
    //     <li>Company</li>
    //     <li>Products</li>
    //     <li>Offices</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //   </ul>
    //   <div className="footer-social-icon">
    //     <div className="footer-icons-container">
    //         <img src={instagram_icon} alt="" />
    //     </div>
    //     <div className="footer-icons-container">
    //         <img src={pintester_icon} alt="" />
    //     </div>
    //     <div className="footer-icons-container">
    //         <img src={whatsapp_icon} alt="" />
    //     </div>
    //   </div>
    //   <div className="footer-copyright">
    //     <hr />
    //     <p>Copyright @ 2023 - All Right Reserved.</p>
    //   </div>
    // </div>

    <div className="max-w-[1440px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-between md:w-[75%] my-6">
          {/* <FaFacebookSquare size={30} />
    <FaInstagram size={30} />
    <FaTwitterSquare size={30} />
    <FaGithubSquare size={30} />
    <FaDribbbleSquare size={30} /> */}
        </div>
      </div>
      <div className="lg:col-span-2 flex grid md:grid-cols-3 justify-around mt-2">
        <div className="">
          <h6 className="font-high text-gray-400">Ubicanos</h6>
          <ul>
            <li className="py-2 text-sm">
              <span>Medellín</span>
            </li>
            <li className="py-2 text-sm">
              <span>La Candelaria</span>
            </li>
            <li className="py-2 text-sm">
              <span>Edificio fundadores</span>
            </li>
            <li className="py-2 text-sm">
              <span>Piso 11 Consultorio 1107</span>
            </li>

            <li className="py-2 text-sm">
              <span>Cl.54 #46-115</span>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Horarios</h6>
          <ul>
            <li className="py-2 text-sm">LUN-VIE 8:00 a.m. – 6:00 p.m.</li>
            <li className="py-2 text-sm">SABADO 8:00 a.m. – 1:00 p.m.</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Hablemos</h6>
          <ul>
            <li className="py-2 text-sm">Telefono: 604 489 99 18</li>
            <li className="py-2 text-sm">WhatsApp: 312 279 48 31</li>
            <li className="py-2 text-sm">
              Email: dentaldreamsr@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
