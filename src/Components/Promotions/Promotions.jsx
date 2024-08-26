import React from "react";
import "./Promotions.css";
import { Animate } from "react-simple-animate";

const Promotions = () => {
  return (
    <div className="hero">
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

      <div className="hero-right">
      
      
    
      </div>
    </div>
  );
};

export default Promotions;
