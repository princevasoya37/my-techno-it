import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Afa Rose",
    title: "Web Designer",
    feedback:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam",
    image: "assets/images/testimonial-2.jpg",
  },
  {
    name: "Keena Lara",
    title: "Store Owner",
    feedback:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
    image: "assets/images/testimonial-3.jpg",
  },
  {
    name: "Fizzi Brandon",
    title: "Freelancer",
    feedback:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam",
    image: "assets/images/testimonial-4.jpg",
  },
  {
    name: "Jhone Doe",
    title: "CFO",
    feedback:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam",
    image: "assets/images/testimonial-1.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="container my-5">
      <h2 className="PricingPlans-text text-center">Testimonials</h2>
      <p className="muted-text mb-5 text-center">Lorem ipsum dolor sit amet</p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
        breakpoints={{
          1200: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          320: {slidesPerView: 1},
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div
              className="card Testimonials-card shadow-sm border-0 p-3 text-start"
              style={{ maxWidth: "350px" }}
            >
              <div className="d-flex align-items-center mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle me-4 img-person"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h5 className="mb-1 Testimonials-name">{t.name}</h5>
                  <p className="mb-1 Testimonials-title">{t.title}</p>
                  <div className="text-warning">
                    {[...Array(5)].map((_, idx) => (
                      <MdStarRate key={idx} className="star-icon" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="Quote-text">
                <FaQuoteLeft className="FaQuoteLeft me-2" />
                {t.feedback}
                <FaQuoteRight className="FaQuoteLeft ms-2" />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



