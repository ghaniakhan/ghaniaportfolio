import React from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Ghania Khan Niazi. All rights reserved.</p>
        <div className="footer-social">
          <a
            href="https://github.com/ghaniakhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ghania-khan-niazi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="tel:+923092002299" title="Call Ghania">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
