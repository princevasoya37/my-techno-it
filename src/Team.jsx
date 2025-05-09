import React from "react";
import { IoLogoTwitter,IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Team = () => {
  return (
    <>
      <div className="team">
         <div className="team-container">
         <h2 className="team-text">team</h2>
      <p className="team-p">Lorem ipsum dolor sit amet</p>
            <div className="team-inner">
                <div className="team-item">
                    <div className="team-img">
                        <img src="assets/images/team-1.jpg" alt="" srcset="" />
                    </div>
                    <div className="team-title">
                     <h4>Jhone Bi</h4>
                      <span>Application Manager</span>
                    </div>
                    <div className="team-icon">
                        <a href="#"><IoLogoTwitter className="team-insta-icon"/></a>
                        <a href="#"><FaFacebookSquare className="team-insta-icon" /></a>
                        <a href="#"><FaLinkedin className="team-insta-icon"/></a>
                        <a href="#"><IoLogoInstagram className="team-insta-icon"/></a>
                    </div>
                </div>
                <div className="team-item">
                    <div className="team-img">
                        <img src="assets/images/team-2.jpg" alt="" srcset="" />
                    </div>
                    <div className="team-title">
                     <h4>Sani Awesome</h4>
                      <span>Social Media</span>
                    </div>
                    <div className="team-icon">
                        <a href="#"><IoLogoTwitter className="team-insta-icon"/></a>
                        <a href="#"><FaFacebookSquare className="team-insta-icon" /></a>
                        <a href="#"><FaLinkedin className="team-insta-icon"/></a>
                        <a href="#"><IoLogoInstagram className="team-insta-icon"/></a>
                    </div>
                </div>
                <div className="team-item">
                    <div className="team-img">
                        <img src="assets/images/team-3.jpg" alt="" srcset="" />
                    </div>
                    <div className="team-title">
                     <h4>Andrio Willi</h4>
                      <span>Content Writer</span>
                    </div>
                    <div className="team-icon">
                        <a href="#"><IoLogoTwitter className="team-insta-icon"/></a>
                        <a href="#"><FaFacebookSquare className="team-insta-icon" /></a>
                        <a href="#"><FaLinkedin className="team-insta-icon"/></a>
                        <a href="#"><IoLogoInstagram className="team-insta-icon"/></a>
                    </div>
                </div>
                <div className="team-item">
                    <div className="team-img">
                        <img src="assets/images/team-4.jpg" alt="" srcset="" />
                    </div>
                    <div className="team-title">
                     <h4>Afa Jonson</h4>
                      <span>Business Manager</span>
                    </div>
                    <div className="team-icon">
                        <a href="#"><IoLogoTwitter className="team-insta-icon"/></a>
                        <a href="#"><FaFacebookSquare className="team-insta-icon" /></a>
                        <a href="#"><FaLinkedin className="team-insta-icon"/></a>
                        <a href="#"><IoLogoInstagram className="team-insta-icon"/></a>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </>
  );
};

export default Team;
