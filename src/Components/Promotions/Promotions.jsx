import React from "react";
import "./Promotions.css";
import { Animate } from "react-simple-animate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Promotions = () => {
  const [t, i18n] = useTranslation("global");
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
              {t("home.text_banner")}
              </p>
            </div>
            <button type="submit" className="promotions-latest-btn">
            {t("home.button_banner")}
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
