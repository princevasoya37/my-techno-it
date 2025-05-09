import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header';
import App from './app';
import OurServices from './OurServices'
import OurPortfolio from './OurPortfolio'
import OurTestimonials from './OurTestimonials'
import OurTeam from './OurTeam'
import AboutUs from './AboutUs'
import OurPackages from './OurPackages'
import OurFqs from './OurFqs';
import PrivacyPolicy from './PrivacyPolicy'
import OurBlogs from './OurBlogs'
import ContactUs from './ContactUs'
import Footer from './footer';
import ScrollToTop from './scrolltotop'
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Header/>
        <Routes>
              <Route path="/" element = {<App/>}></Route>
              <Route path="/Services" element={<OurServices />} />
              <Route path="/Portfolio" element={<OurPortfolio />} />
              <Route path="/Testimonials" element={<OurTestimonials />} />
              <Route path="/Team" element={<OurTeam />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Packages" element={<OurPackages />} />
              <Route path="/faq" element={<OurFqs/>} />
              <Route path="/Policy" element={<PrivacyPolicy/>} />
              <Route path="/Blogs" element={<OurBlogs/>} />
              <Route path="/Contact" element={<ContactUs/>} />
        </Routes>
        <Footer/>
        <ScrollToTop/>
    </BrowserRouter>    
  </>
);