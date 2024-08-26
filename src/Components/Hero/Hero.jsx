import React from "react";
import "./Hero.css";
import { Animate } from "react-simple-animate";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left"></div>
      <div className="hero-left">
        <Animate
          play
          duration={2}
          end={{ opacity: 1, filter: "blur(0)" }}
          start={{ opacity: 0, filter: "blur(10px)" }}
        >
          <div>
            <div className="hero-hand-icon">
              <p>Transformamos vidas creando sonrisas</p>
            </div>
            <p>Especialista en sonrisas naturales</p>
            <p>en medellin.</p>
            <button type="submit" className="hero-latest-btn">
              Agenda tu cita !!!
            </button>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default Hero;
