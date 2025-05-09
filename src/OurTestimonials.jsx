import React  from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";

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
const  OurTestimonials = () => {

  return (
    <>
         <div className="service-main">
            <div className="sevice-container-1">
            <div className="our-serives-main">
               <h2 className="our-serives-h2">Our Testimonials</h2>
               <p className="our-serives-p">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div> 
            </div>
         </div>
         <div className="page-header">
            <div className="service-header-container">
                  <ul>
                     <li><a href="/">Home</a></li> /
                     <li className="page-our">Our Testimonials</li>
                  </ul>
                </div> 
           </div>


    <div className="container my-5">
      <h2 className="PricingPlans-text text-center">Testimonials</h2>
      <p className="muted-text mb-5 text-center">Lorem ipsum dolor sit amet</p>

      <div className="row justify-content-center">
        {testimonials.map((t, i) => (
          <div key={i} className="col-md-12 mb-4 d-flex justify-content-center">
            <div
              className="card Testimonials-card shadow-sm border-0 p-3 text-start"
              style={{ maxWidth: "1200px" }}
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
          </div>
        ))}
      </div>
    </div>



    
    </>
  );
};

export default OurTestimonials;