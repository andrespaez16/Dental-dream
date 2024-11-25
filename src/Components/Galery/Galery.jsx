import React, { useEffect, useState } from "react";
import "./Galery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
const Galery = () => {
  const [t, i18n] = useTranslation("global");
  const [deviceMovil, setDeviceMovil] = useState(3);

  const deviceSize = () => {
    if ((window.screen.height) <= 844) {
      setDeviceMovil(1);
    } else {
      setDeviceMovil(3);
    }
  };

  useEffect(() => {
    deviceSize();
  }, []);

  return (
    <div className="galery">
      <div className="title-galery">
        <h2>Galeria</h2>
      </div>

      <div className="galery-section">
        <Swiper
          slidesPerView={deviceMovil}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
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
          <SwiperSlide>
            <div className="photo-four"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="photo-five"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="photo-six"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="photo-seven"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="photo-eight"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="photo-nine"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Galery;
