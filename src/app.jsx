import React from "react"
import Header from "./header"
import HeroSection from "./benner"
import Services from "./Services"
import WhyChooseUs from "./WhyChooseUs"
import Portfolio from "./Portfolio"
import PricingPlans from "./PricingPlans"
import Testimonials from "./Testimonials"
import HappyClients from "./HappyClients"
import Company from "./Company"
import Team from "./Team"
import Faqs from "./Faqs"
import Discuss from "./Discuss"
import BlogCards from "./BlogCards"
import ContactForm from "./ContactForm"
import Footer from "./footer"


const App = () => {
    return (
        <>
            <HeroSection/>
            <Services/>
            <WhyChooseUs/>
            <Portfolio/>
            <PricingPlans/>
            <Testimonials/>
            <HappyClients/>
            <Company/>
            <Team/>
            <Faqs/>
            <Discuss/>
            <BlogCards/>
            <ContactForm/>
        </>
    )
}
export default App;