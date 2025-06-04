import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './About.css';

const About = () => {
  const profileRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      profileRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power2.out' }
    );
    gsap.fromTo(
      educationRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.4, ease: 'power2.out' }
    );
  }, []);

  return (
     <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-cards">
        <div className="card profile-card" ref={profileRef}>
          <h3>Ghania Khan Niazi</h3>
          <p>
            Motivated and results-driven Software Developer with a strong foundation in full-stack development and
            a passion for AI and emerging technologies. Experienced in deploying user-centric applications and integrating ML into real-world solutions.
          </p>
        </div>

        <div className="card education-card" ref={educationRef}>
          <h3>Education</h3>
          <ul>
            <li>
              <strong>BS Computer Science</strong><br />
              University of Engineering and Technology, Lahore (2022–2026)
            </li>
            <li>
              <strong>FSc Pre-Engineering</strong><br />
              Punjab Group of Colleges, Lahore (2020–2022)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
