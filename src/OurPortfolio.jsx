import React  from "react";
import Portfolio from "./Portfolio"



const  OurPortfolio = () => {

  return (
    <>
        <div className="service-main">
            <div className="sevice-container-1">
            <div className="our-serives-main">
               <h2 className="our-serives-h2">Our Portfolio</h2>
               <p className="our-serives-p">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div> 
            </div>
         </div>
         <div className="page-header">
            <div className="service-header-container">
                  <ul>
                     <li><a href="/">Home</a></li> /
                     <li className="page-our">Our Portfolio</li>
                  </ul>
                </div> 
           </div>
        <Portfolio/>
    </>
  );
};

export default OurPortfolio;
