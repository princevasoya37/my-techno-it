import React  from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'; 


const  OurPackages = () => {
    
  return (
    <>
      <div className="service-main">
            <div className="sevice-container-1">
              <div className="our-serives-main">
                 <h2 className="our-serives-h2">Our Packages</h2>
                 <p className="our-serives-p">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div> 
            </div>
      </div>
      <div className="page-header">
         <div className="service-header-container">
            <ul>
              <li><a href="/">Home</a></li> /
              <li className="page-our"> Our Packages</li>
            </ul>
          </div> 
      </div>
         {/* ======= */}
      <div className="container py-5 text-center">
      
            <div className="row">
              {/* Plan 1 */}
              <div className="col-md-4 mb-4">
                <div className="card border-0 card-hover h-100">
                  <div className="card-body">
                    <h2 className="card-title ">Basic</h2>
                    <h4 className="card-price my-2"><sup>$</sup>25 </h4>
                    <ul className="list-unstyled mb-4">
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Unlimited GB Space</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>30 Domain Names</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Free SSL</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Daily Backup</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Free Templates</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Free Email</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>10 Databases</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/> Unlimited Email Address</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Live Support</li>
                    </ul>
                    <a href="#" className="Order-now">Order Now</a>
                  </div>
                </div>
              </div>
      
              {/* Plan 2 */}
              <div className="col-md-4 mb-4">
                <div className="card border-0 card-hover h-100">
                  <div className="card-body">
                    <h2 className="card-title">Standard</h2>
                    <h4 className="card-price my-2"><sup>$</sup>50 </h4>
                    <ul className="list-unstyled mb-4">
                    <li><FaRegCheckCircle className='icon-CheckCircle'/>Unlimited GB Space</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>30 Domain Names</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Free SSL</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Daily Backup</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Free Templates</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Free Email</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>10 Databases</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/> Unlimited Email Address</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Live Support</li>
                    </ul>
                    <a href="#" className="Order-now">Order Now</a>
                  </div>
                </div>
              </div>
      
              {/* Plan 3 */}
              <div className="col-md-4 mb-4">
                <div className="card border-0 card-hover h-100">
                  <div className="card-body">
                    <h2 className="card-title">Premium</h2>
                    <h4 className="card-price my-2"><sup>$</sup>100 </h4>
                    <ul className="list-unstyled mb-4">
                     <li><FaRegCheckCircle className='icon-CheckCircle'/>Unlimited GB Space</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>30 Domain Names</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Free SSL</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Daily Backup</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Free Templates</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Free Email</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>10 Databases</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/> Unlimited Email Address</li>
                      <li><FaRegCheckCircle className='icon-CheckCircle'/>Live Support</li>
                    </ul>
                    <a href="#" className="Order-now">Order Now</a>
                  </div>
                </div>
              </div>
      
            </div>
          </div>       
     </>
  );
};

export default OurPackages;
