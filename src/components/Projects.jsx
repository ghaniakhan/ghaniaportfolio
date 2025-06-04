import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';


gsap.registerPlugin(ScrollTrigger);


  const projectsData = [
  {
    title: 'AI-Based QR Code Detection System',
    description: 'Detects and classifies QR codes using OpenCV and deep learning.',
    github: 'https://github.com/ghaniakhan/AI-project-Submission-QR-Ccode-Detection-',
  },



  {
    title: 'AI Predictive Analysis for Autism Detection',
    description: 'AI platform for early autism risk assessment.',
    github:'https://github.com/ghaniakhan/AI-Autism-Detection-System'
  },



  
  {
    title: 'NextGen Resume Platform (ATS Score Check)',
    description: 'Real-time ATS resume feedback with AI suggestions.',
    github: 'https://github.com/ghaniakhan/Next-Gen-Resume-Platform-Project',
  },



   {
    title: 'Doctor Appointment System',
    description: 'This project presents a Doctor Appointment System, a web-based application designed for the interactions among administrators, doctors, and patients.',
    github:'https://github.com/ghaniakhan/WT-Project',
    Deployed: 'https://gkn-doctors2024app.infinityfreeapp.com/',
  },

  {
    title: 'Financial Fraud Detection System',
    description: 'Detects fraud patterns in user transactions using SQL',
    github:'https://github.com/ghaniakhan/Financial-Fraud-Detection-System-Project',
  },

   {
    title: 'StudyPool - Educational Pl atform',
    description: 'Student-teacher platform where students can buy different notes and books and can post questions that will be answerd by tachers and have proper subscriptions and payment gateway.',
    github: 'https://github.com/ghaniakhan/StudyPool-Project',
  },

   {
    title: 'Multi-Brand E-Commerce',
    description: 'React + MySQL-based e-commerce with auth and product management.',
    github:'https://github.com/ghaniakhan/Multi-Brand-Ecommerce-Website'
  },

 
  
 

 
];


const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
   <div className="projects-grid">
  {projectsData.map((project, idx) => (
   <div
  key={idx}
  className={`project-card`}
  onClick={(e) => {
    const card = e.currentTarget;
    card.classList.toggle('flipped');
  }}
>

      <div className="card-inner">
        <div className="card-front">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      <div className="card-back">
  {project.github && (
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
      <FaGithub /> GitHub
    </a>
  )}
  {project.Deployed && (
    <a href={project.Deployed} target="_blank" rel="noopener noreferrer" className="demo-link">
      <BiLinkExternal /> Deployed
    </a>
  )}
  {!project.github && !project.Deployed && <p>Coming Soon</p>}
</div>
      </div>
    </div>
  ))}
</div>
  );
};

export default Projects;


