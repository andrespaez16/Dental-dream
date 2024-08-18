import React from "react";
import "./Indicator.css";
import CountUp from "react-countup";

const Indicator = (props) => {
  console.log(props.info, "estaisoos");
  return (
    <div
    className="mx-auto grid md:grid-cols-3 mt-[50px]"
    data-aos="zoom-in"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
  >
    <div className="flex-col text-center w-full">
      <h1 className="md:text-3xl sm:text-2xl text-center text-2xl font-bold  mb-6 sombra">
        Años de Experiencia
      </h1>
      <div className="diente rounded-full inline-block">
        <span className="text-center text-2xl font-bold  mt-[20px] relative top-[35%]">
          <CountUp end={13} duration={7} />
        </span>
      </div>
    </div>
    <div className="flex-col text-center w-full">
      <h1 className="md:text-3xl sm:text-2xl text-center text-2xl font-bold  mb-6 sombra">
        Calidad y Garantia del trabajo
      </h1>
      <div className="diente rounded-full inline-block">
        <span className="text-center text-2xl font-bold  mt-[20px] relative top-[35%]">
          <CountUp end={100} duration={7} />
          %
        </span>
        
      </div>
    </div>
    <div className="flex-col text-center w-full">
      <h1 className="md:text-3xl sm:text-2xl text-center text-2xl font-bold  mb-6 sombra">
        Clientes Satifechos
      </h1>
      <div className="diente rounded-full inline-block">
        <span className="text-center text-2xl font-bold  mt-[20px] relative top-[35%]">
          <CountUp end={3500} duration={7} />
        </span>
      </div>
    </div>
  </div>
  );
};

export default Indicator;