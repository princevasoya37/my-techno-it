import React, { useEffect, useRef, useState } from "react";

export default function HappyClients() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const animateCounter = (setCount, end) => {
        let start = 0;
        const step = Math.ceil(end / 60);
        const interval = setInterval(() => {
          start += step;
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          setCount(start);
        }, 20);
      };

      animateCounter(setCount1, 232);
      animateCounter(setCount2, 521);
      animateCounter(setCount3, 453);
    }
  }, [animate]);

  return (
    <div className="fixed-bg-section" ref={sectionRef}>
      <div className="container content">
        <div className="happay-main">
          <div className="happy-inner">
            <div className="happy-icon">
              <img src="assets/images/happy-clients.svg" alt="happy-client" />
            </div>
            <span>{count1}</span>
            <h3>Happy Clients</h3>
            <p>consequuntur quae diredo</p>
          </div>

          <div className="happy-inner">
            <div className="happy-icon">
              <img src="assets/images/complete-projects.svg" alt="completed-projects" />
            </div>
            <span>{count2}</span>
            <h3>Completed Projects</h3>
            <p>adipisci atque quia aut</p>
          </div>

          <div className="happy-inner">
            <div className="happy-icon">
              <img src="assets/images/hours-support.svg" alt="hours-support" />
            </div>
            <span>{count3}</span>
            <h3>Hours Of Support</h3>
            <p>aut commodi quaerat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

