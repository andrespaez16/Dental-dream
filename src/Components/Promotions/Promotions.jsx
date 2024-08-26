import React from "react";
import "./Promotions.css";
import { Animate } from "react-simple-animate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Promotions = () => {
  return (
    <div className="promotions">
      <div className="promotions-left">
        <Animate
          play
          duration={2}
          end={{ opacity: 1, filter: "blur(0)" }}
          start={{ opacity: 0, filter: "blur(10px)" }}
        >
          <div>
            <div className="promotions-hand-icon">
              <p>
                Si necesitas mejorar la posición de tus dientes y quieres
                embellecer tu sonrisa o bien, estás requiriendo un tratamiento
                de implantes dentales. ¡Llegaste al lugar indicado, tu clínica
                odontológica Dental Dream! Contamos con una trayectoria de más
                de 13 años que nos posiciona como una de los mejores
                consultorios de Medellín en odontología, para ofrecerte una
                experiencia placentera y de alta calidad en los servicios de
                salud oral y cuidado de tu sonrisa.
              </p>
            </div>
            <p>Especialista en sonrisas naturales</p>
            <p>en medellin.</p>
            <button type="submit" className="promotions-latest-btn">
              Conocenos
            </button>
          </div>
        </Animate>
      </div>

      <div className="promotions-right">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="photo-one"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="photo-two"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="photo-three"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Promotions;
