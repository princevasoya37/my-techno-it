import React from "react";
import {  FaTwitter, FaLinkedin, FaFacebook, FaInstagram,FaTelegram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
const Footer = () => {
    return (
        <>
            <footer className="footer-main">
                <div className="container">
                    <div className="footer-inner">
                        <div className="column-1">
                            <div className="first-item">
                                <div className="logo-part">
                                    <img className="logo" src="assets/images/logo.webp" alt="logo" />
                                </div>
                                <div className="footer-txt">
                                    <p>
                                        Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                                         sed do eiusmod tempor incididuntut consec tetur adipisicing elit,
                                         Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="social-icons">
                                    <span>Follow us</span>
                                    <a className="" href="#"><FaTwitter /></a>
                                    <a className="facebook" href="#"><FaFacebook /></a>
                                    <a className="instagram" href="#"><FaInstagram /></a>
                                    <a className="linkedin" href="#"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                        <div className="column-2">
                            <div className="second-item">
                                <div className="heading">
                                <h3>Services</h3>
                                </div>
                                <ul className="list">
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">App Developemnt</a></li>
                                        <li><a href="#">Cloud Services</a></li>
                                        <li><a href="#">Domain adn Hosting</a></li>
                                        <li><a href="#">Seo Optimization</a></li>
                                        <li><a href="#">Social Media</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column-3">
                            <div className="second-item">
                                <div className="heading">
                                <h3>Information</h3>
                                </div>
                                <ul className="list">
                                        <li><a href="#"></a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Blog Details</a></li>
                                        <li><a href="#">Coming Soon  </a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column-4">
                            <div className="third-item">
                                <div className="heading">
                                    <h3>Contacts</h3>
                                </div>
                                <div className="footer-txt">
                                    <p><FaLocationDot /> 101 West Town , PBO 12345, United States</p>
                                    <p><BsFillTelephoneInboundFill /> +1 1234 56 789</p>
                                    <p><BsFillEnvelopeFill /> contact@example.com</p>
                                </div>
                                <div className="heading">
                                    <h3>Newsletter</h3>
                                </div>
                                <div className="footer-txt">
                                    <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="email">
                                    <input type="email" placeholder="Email Address" />
                                    <button type="button">
                                    <FaTelegram className="telegram" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Technoit © 2023 - Designed by <span> Zr Themes</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
