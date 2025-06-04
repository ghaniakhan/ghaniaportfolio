import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);

 useEffect(() => {
  gsap.to(titleRef.current, { y: 0, opacity: 1, duration: 1 });
  gsap.to(descRef.current, { y: 0, opacity: 1, duration: 1, delay: 0.5 });
  gsap.to(imgRef.current, { scale: 1, opacity: 1, duration: 1, delay: 1 });
}, []);


  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 ref={titleRef}>Hi, I'm Ghania Khan Niazi</h1>
        <p ref={descRef}>Software Developer | AI Enthusiast</p>
      </div>
      <div className="hero-image">
        <img ref={imgRef} src="/assets/profile.jpg" alt="Ghania Khan" />
      </div>
    </section>
  );
};

export default Hero;
