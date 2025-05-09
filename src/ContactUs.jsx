import React  from "react";


const  ContactUs = () => {
    
  return (
    <>
      <div className="service-main">
            <div className="sevice-container-1">
              <div className="our-serives-main">
                 <h2 className="our-serives-h2">Contact Us</h2>
                 <p className="our-serives-p">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div> 
            </div>
      </div>
      <div className="page-header">
         <div className="service-header-container">
            <ul>
              <li><a href="/">Home</a></li> /
              <li className="page-our"> Contact Us</li>
            </ul>
          </div> 
      </div>
         {/* ======= */} 
         <div className="cu-wrapper">
      <div className="cu-header">
      </div>
      <div className="cu-container">
        <div className="cu-left">
          <h6>Address:</h6>
          <p>11 West Town<br />PBo 12345, United States</p>

          <h6>Phone:</h6>
          <p>+1 1234 56 789<br />+1 1234 56 780</p>

          <h6>Email:</h6>
          <p>info@example.com<br />email@example.com</p>
        </div>

        <div className="cu-right">
          <form method='get'>
            <div className="cu-row">
              <input type="text" placeholder="Name*"  required/>
              <input type="email" placeholder="Email*" required/>
            </div>
            <input type="text" placeholder="Subject" className="cu-input-full"  required/>
            <textarea placeholder="Write Your Message*"></textarea>
            <button className="button-form"type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
     </>
  );
};

export default ContactUs;
