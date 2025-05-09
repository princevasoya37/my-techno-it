import React  from "react";
import Team from "./Team"

const  OurTeam = () => {

  return (
    <>
        <div className="service-main">
            <div className="sevice-container-1">
            <div className="our-serives-main">
               <h2 className="our-serives-h2">Our Team</h2>
               <p className="our-serives-p">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div> 
            </div>
         </div>
         <div className="page-header">
            <div className="service-header-container">
                  <ul>
                     <li><a href="/">Home</a></li> /
                     <li className="page-our">Our Team</li>
                  </ul>
                </div> 
           </div>
           <Team/>
    </>
  );
};

export default OurTeam;
