import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Company = () => {
  return (
    <div className="company-main">
      <div className="company-container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 3 },
            320: { slidesPerView: 1 },
          }}
          className="company-inner"
        >
          <SwiperSlide>
            <div className="company-item">
              <img src="assets/images/client-1.webp" alt="client 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-item">
              <img src="assets/images/client-2.webp" alt="client 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-item">
              <img src="assets/images/client-4.webp" alt="client 4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-item">
              <img src="assets/images/client-5.webp" alt="client 5" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-item">
              <img src="assets/images/client-6.png" alt="client 6" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-item">
              <img src="assets/images/client-3.png" alt="client 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-item">
              <img src="assets/images/client-7.webp" alt="client 7" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-item">
              <img src="assets/images/client-8.webp" alt="client 8" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Company;
