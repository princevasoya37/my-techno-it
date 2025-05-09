import React, { useState, useEffect } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";

import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle class on body
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-wrapper">
          {/* Logo */}
          <div className="logo">
            <a href="#">
              <img className="logo-img" src="assets/images/logo.webp" alt="logo-header" />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className={`nav-slide ${menuOpen ? "open" : ""}`}>
            <ul className="head-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/Services">Services</a></li>
              <li><a href="/Portfolio">Portfolio</a></li>
              <li><a href="/Testimonials">Testimonials</a></li>
              <li><a href="/Team">Team</a></li>
              <li className="dropdown">
                <a href="#">
                  Menu <RiArrowDropDownLine className="dropdown-icon" />
                </a>
                <div className="menu-inner">
                  <div className="item-menu">
                    <ul className="menu-in">
                      <li><a href="/AboutUs">About</a></li>
                      <li><a href="Packages">Pricing</a></li>
                      <li><a href="/faq">FAQs</a></li>
                      <li><a href="/Policy">Terms & Conditions</a></li>
                      <li><a href="/Policy">Privacy Policy</a></li>
                      <li><a href="/Blogs">Blogs</a></li>
                      <li><a href="/Blogs">Blog Detail Page</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li><a href="/Blogs">News</a></li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">
           <a  className="quote-btn" href="/Contact">Get Quotes</a>
           <div className="moon-icon" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <IoSunny /> : <IoMoonSharp />}
              </div>
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "×" : "☰"}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState ,useEffect } from "react";
// import { IoMoonSharp } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header  className={`header ${scrolled ? "scrolled" : ""}`}>
//       <div className="container">
//         <div className="header-wrapper">
//           <div className="logo">
//             <a href="#">
//               <img className="logo-img" src="assets/images/logo.webp" alt="logo-header" />
//             </a>
//           </div>
       

//           <nav className={`nav-slide ${menuOpen ? "open" : ""}`}>
//             <ul className="head-menu">
//               <li><a href="#">Home</a></li>
//               <li><a href="#">Services</a></li>
//               <li><a href="#">Portfolio</a></li>
//               <li><a href="#">Testimonials</a></li>
//               <li><a href="#">Team</a></li>
//               <li>
//                 <a href="#">
//                   Menu  <RiArrowDropDownLine className="dropdown-icon" />
//                 </a>
//                 <div className="menu-inner">
//                   <div className="item-menu">
//                     <ul className="menu-in">
//                       <li><a href="#">About</a></li>
//                       <li><a href="#">Pricing</a></li>
//                       <li><a href="#">FAQs</a></li>
//                       <li><a href="#">Terms & Conditions</a></li>
//                       <li><a href="#">Privacy Policy</a></li>
//                       <li><a href="#">Blogs</a></li>
//                       <li><a href="#">Blog Detail Page</a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li><a href="#">News</a></li>
//             </ul>
//           </nav>
//            <div className="header-actions">
//             <button className="quote-btn">Get Quotes</button>
//             <div className="moon-icon">
//             <IoMoonSharp />
//             </div>
//           </div>
//           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? "×" : "☰"}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;