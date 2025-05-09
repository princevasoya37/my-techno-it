import React  from "react";
import Services from "./Services"



const  OurServices = () => {

  return (
    <>
         <div className="service-main">
            <div className="sevice-container-1">
            <div className="our-serives-main">
               <h2 className="our-serives-h2">Our Services</h2>
               <p className="our-serives-p">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div> 
            </div>
         </div>
         <div className="page-header">
            <div className="service-header-container">
                  <ul>
                     <li><a href="/">Home</a></li> /
                     <li className="page-our">Our Services</li>
                  </ul>
                </div> 
           </div>
        <Services/>
    </>
  );
};

export default OurServices;
