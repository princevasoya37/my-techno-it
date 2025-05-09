import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// 👈 import custom CSS

// Portfolio data
const portfolioData = [
  { id: 1, category: 'App Design', image: 'assets/images/product-1.jpg' },
  { id: 2, category: 'App Development', image: 'assets/images/product-2.jpg' },
  { id: 3, category: 'Branding', image: 'assets/images/product-3.jpg' },
  { id: 4, category: 'IT Solutions', image: 'assets/images/product-4.jpg' },
  { id: 5, category: 'App Development', image: 'assets/images/product-5.jpg' },
  { id: 6, category: 'Branding', image: 'assets/images/product-6.jpg' },
];

// Categories
const categories = ['All', 'App Design', 'App Development', 'Branding', 'IT Solutions'];

export default function Portfolio() {
     useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredData = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <div className="portfolio-container">
      {/* Heading */}
      <div className="portfolio-contain" data-aos="fade-up" data-aos-delay="200">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <p className="portfolio-subtitle">Lorem ipsum dolor sit amet</p>
      </div>
      {/* Category Buttons */}
      <div className="portfolio-buttons" data-aos="fade-up" data-aos-delay="200">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`portfolio-Category ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="portfolio-grid" data-aos="fade-up" data-aos-delay="400">
        {filteredData.map(item => (
          <div key={item.id} className="portfolio-card">
            <img src={item.image} alt={item.category} className="portfolio-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
