import React  from "react";
import Faqs from "./Faqs"

const  OurFqs = () => {
    
  return (
    <>
      <div className="service-main">
            <div className="sevice-container-1">
              <div className="our-serives-main">
                 <h2 className="our-serives-h2">FAQ'</h2>
                 <p className="our-serives-p">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div> 
            </div>
      </div>
      <div className="page-header">
         <div className="service-header-container">
            <ul>
              <li><a href="/">Home</a></li> /
              <li className="page-our"> FAQ'</li>
            </ul>
          </div> 
      </div>
         {/* ======= */}
       <Faqs/> 
     </>
  );
};

export default OurFqs;
