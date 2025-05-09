import React from 'react';


const ContactForm = () => {
  return (
    <div className="cu-wrapper">
      <div className="cu-header">
      <h2 className="team-text">Contact Us</h2>
      <p className="team-p">Lorem ipsum dolor sit amet</p>
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
  );
};

export default ContactForm;

