import React from "react";
import Hero from "../../Components/Hero/Hero";
import Promotions from "../../Components/Promotions/Promotions";
import "../Home/Home.css";
import Indicator from "../../Components/Indicators/Indicator";
import Form from "../../Components/Form/Form";
import SisteCredito from "../../Components/SisteCredito/SisteCredito";

const Home = () => {

  return (
    <div>
      <Hero />
      <Indicator />
      <Promotions />
      <Form></Form>
      <SisteCredito></SisteCredito>
      
      <button className="w-[70px] h-[70px] border-radius: [50px] what">
        <a
          className="hide-type"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=3122794831&text=Deseo agendar una cita de valoracion!!"
        >
          whatsapp
        </a>
      </button>
    </div>
  );
};

export default Home;
