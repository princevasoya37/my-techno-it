import React, { useEffect } from "react";
 import AOS from "aos";
 import "aos/dist/aos.css";
const  AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <>
      <div className="service-main">
            <div className="sevice-container-1">
              <div className="our-serives-main">
                 <h2 className="our-serives-h2">About Us</h2>
                 <p className="our-serives-p">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div> 
            </div>
      </div>
      <div className="page-header">
         <div className="service-header-container">
            <ul>
              <li><a href="/">Home</a></li> /
              <li className="page-our">About Us</li>
            </ul>
          </div> 
      </div>
         {/* ======= */}
             <section className="why-choose-us">
               <div className="content-wrapper">
                 {/* Left Side */}
                 <div className="left-side">
                   <div className="item" data-aos="fade-up" data-aos-delay="100">
                     <div className="item-content left-item">
                       <div className="text">
                         <h4>Experience</h4>
                         <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                       </div>
                       <div className="icon">
                         <img src="assets/images/icon-1.svg" alt="Experience Icon" />
                       </div>
                     </div>
                   </div>
         
                   <div className="item" data-aos="fade-up" data-aos-delay="200">
                     <div className="item-content left-item">
                       <div className="text">
                         <h4>Products</h4>
                         <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </div>
                       <div className="icon">
                         <img src="assets/images/icon-2.svg" alt="Products Icon" />
                       </div>
                     </div>
                   </div>
         
                   <div className="item" data-aos="fade-up" data-aos-delay="300">
                     <div className="item-content left-item">
                       <div className="text">
                         <h4>Approach</h4>
                         <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </div>
                       <div className="icon">
                         <img src="assets/images/icon-3.svg" alt="Approach Icon" />
                       </div>
                     </div>
                   </div>
                 </div>
         
                 {/* Middle Image */}
                 <div className="middle-image" data-aos="fade-up" data-aos-delay="150">
                   <img src="/assets/images/features.jpg" alt="Center Illustration" />
                 </div>
         
                 {/* Right Side */}
                 <div className="right-side">
                   <div className="item" data-aos="fade-up" data-aos-delay="400">
                     <div className="item-content right-item">
                       <div className="icon">
                         <img src="assets/images/icon-4.svg" alt="Pricing Icon" />
                       </div>
                       <div className="text-1">
                         <h4>Pricing</h4>
                         <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </div>
                     </div>
                   </div>
         
                   <div className="item" data-aos="fade-up" data-aos-delay="500">
                     <div className="item-content right-item">
                       <div className="icon">
                         <img src="assets/images/icon-5.svg" alt="Delivery Icon" />
                       </div>
                       <div className="text-1">
                         <h4>Delivery</h4>
                         <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </div>
                     </div>
                   </div>
         
                   <div className="item" data-aos="fade-up" data-aos-delay="600">
                     <div className="item-content right-item">
                       <div className="icon">
                         <img src="assets/images/icon-6.svg" alt="Support Icon" />
                       </div>
                       <div className="text-1">
                         <h4>Support</h4>
                         <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </div>
                     </div>
                   </div>
                 </div>
         
               </div>
             </section>
     </>
  );
};

export default AboutUs;
