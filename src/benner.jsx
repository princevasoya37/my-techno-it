import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from 'particles.js';

export default function HeroSection() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true,
                        "value_area": 4000
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 6,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }, []);

    return (
        <section className="hero-section">
            <div id="particles-js">
                <canvas className="particles-js-canvas-el" style={{ width: "100%", height: "100%" }}></canvas>
            </div>
            <div className="hero-content">
                <div className="text-content" data-aos="fade-up" data-aos-delay="200">
                    <h1>
                        Delivering Superior Services
                        <br />
                        <span className="highlight" data-aos="fade-right" data-aos-delay="800">
                            IT Solutions.
                        </span>
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="200">
                        You can easily change any design to your own. It is also highly
                        customizable SEO friendly template.
                    </p>
                    <div className="icons" data-aos="fade-up" data-aos-delay="200">
                        <a href="#" className="social"><FaTwitter /></a>
                        <a href="#" className="social"><FaFacebook /></a>
                        <a href="#" className="social"><FaLinkedin /></a>
                        <a href="#" className="social"><FaInstagram /></a>
                    </div>
                    <div className="button-group" data-aos="fade-up" data-aos-delay="200">
                        <a href="#" className="btn-primary">Get Quotes</a>
                        <a href="#" className="btn-secondary">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    );
}