import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.jpg'

const Hero = () => {
  return (
    <div className='hero kenburns-bottom-left'>
      <div className="hero-left">
        {/* <h2>Transformamos vidas creando sonrisas</h2> */}
        {/* <div>
            <div className="hero-hand-icon">
                <p>Transformamos vidas creando sonrisas</p>
            </div>
            <p>Especialista en sonrisas naturales</p>
            <p>en medellin.</p>
        </div> */}
        
        <div className="hero-latest-btn">
            <div>Agenda tu cita !!!</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="hero-left">
        {/* <h2>Transformamos vidas creando sonrisas</h2> */}
        {/* <div>
            <div className="hero-hand-icon">
                <p>Transformamos vidas creando sonrisas</p>
            </div>
            <p>Especialista en sonrisas naturales</p>
            <p>en medellin.</p>
        </div> */}
        <div className="hero-latest-btn">
            <div>Agenda tu cita !!!</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Hero
