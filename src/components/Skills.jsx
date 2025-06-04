import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Skills.css';

const skills = [

  { name: 'Machine Learning', level: 95 },
  { name: 'AI', level: 95 },
  { name: 'React.js', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'CSS3 / Tailwind / Bootstrap', level: 85 },
  { name: 'Node.js / Express/MongoDB', level: 80 },
  { name: 'MYSQL,SQL', level: 90 },
];

const Skills = () => {
  const barsRef = useRef([]);

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: `${skills[i].level}%`,
          duration: 1.2,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar-wrapper">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                ref={el => (barsRef.current[index] = el)}
              />
            </div>
            <div className="skill-level">{skill.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
