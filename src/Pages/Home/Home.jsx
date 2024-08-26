import React from "react";
import Hero from "../../Components/Hero/Hero";
import Promotions from "../../Components/Promotions/Promotions";
import "../Home/Home.css";
import Service from "../../Components/Service/Service";
import Indicator from "../../Components/Indicators/Indicator";

const Home = () => {
  const data = [
    {
      direction: false,
      classPhoto: "service-photo",
      title: "specialities.title_general",
      text: "specialities.text_general",
    },
    {
      direction: true,
      classPhoto: "service-photo-diseño",
      title: "specialities.design_title",
      text: "specialities.degisgn_text",
    },
    {
      direction: false,
      classPhoto: "service-photo-ortodoncia",
      title: "specialities.title_ortodoncia",
      text: "specialities.text_ortdoncia",
    },
    {
      direction: true,
      classPhoto: "service-photo-child",
      title: "specialities.title_odonpentria",
      text: "specialities.text_odonpentria",
    },
    {
      direction: false,
      classPhoto: "service-photo-implants",
      title: "specialities.title_implantes",
      text: "specialities.text_implantes",
    },
    {
      direction: true,
      classPhoto: "service-photo-oral",
      title: "specialities.title_oral",
      text: "specialities.text_oral",
    },
    {
      direction: false,
      classPhoto: "service-photo-periodoncia",
      title: "specialities.title_periodoncia",
      text: "specialities.text_periodoncia",
    },
  ];
  return (
    <div>
      <Hero />
      <Indicator />
      <Promotions />
      
      <button className="w-[70px] h-[70px] border-radius: [50px] what">
        <a
          className="hide-type"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=3006406246&text=Hola deseo conocer los productos de la tienda !!!"
        >
          whatsapp
        </a>
      </button>
    </div>
  );
};

export default Home;
