import React from 'react';
import { FaGithub, FaLinkedin, FaThreads } from 'react-icons/fa6';
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
          <a
            href="https://x.com/GhaniaKhan76693?t=Z6xow8MlGOJVmzvIKm3DBw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaThreads />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
