import React from "react";
import Hero from "../../Components/Hero/Hero";
import Promotions from "../../Components/Promotions/Promotions";
import "../Home/Home.css";
import Service from "../../Components/Service/Service";
import Indicator from "../../Components/Indicators/Indicator";

const Home = () => {

  return (
    <div>
      <Hero />
      <Indicator />
      <Promotions />
      
      <button className="w-[70px] h-[70px] border-radius: [50px] what">
        <a
          className="hide-type"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=3006406246&text=Hola deseo conocer sobre los servicios!!!"
        >
          whatsapp
        </a>
      </button>
    </div>
  );
};

export default Home;
