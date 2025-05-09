import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const services = [
  {
    title: 'Application Design',
    desc: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'assets/images/service-design.svg',
  },
  {
    title: 'Web Hosting',
    desc: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'assets/images/service-hosting.svg',
  },
  {
    title: 'Social Media',
    desc: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'assets/images/service-social.svg',
  },
  {
    title: 'SEO Optimization',
    desc: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'assets/images/service-seo.svg',
  },
  {
    title: 'Cloud Server',
    desc: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'assets/images/service-cloud.svg',
  },
  {
    title: 'Data Security',
    desc: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'assets/images/service-secure.svg',
  },
];

const Services = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div className="container py-5">
      <div className="row g-4">
        {services.map((service, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="service-hover">
            <div className="p-5  text-center service-card h-100 "  data-aos="fade-up" data-aos-delay="200">
              
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h5 className="service-title">{service.title}</h5>
              <p className="service-sub-tital">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
