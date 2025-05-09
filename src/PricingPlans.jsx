import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'; // Important: Import Bootstrap

export default function PricingPlans() {
  return (
    <div className="container py-5 text-center">
      <h2 className="PricingPlans-text">Pricing Plans</h2>
      <p className="muted-text mb-5">Lorem ipsum dolor sit amet</p>

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
  );
}
