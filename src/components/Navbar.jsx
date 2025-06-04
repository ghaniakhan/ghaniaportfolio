import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Ensure you have this or global CSS styles

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let currentSection = 'hero';
      sections.forEach(({ id }) => {
        const elem = document.getElementById(id);
        if (elem && elem.offsetTop <= scrollPos) currentSection = id;
      });
      setActive(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
      setIsOpen(false); // close menu on click
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">Ghania</div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    <ul className={`nav-list ${isOpen ? 'open' : ''}`}>

        {sections.map(({ id, label }) => (
          <li
            key={id}
            className={`nav-item ${active === id ? 'active' : ''}`}
            onClick={() => scrollToSection(id)}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

