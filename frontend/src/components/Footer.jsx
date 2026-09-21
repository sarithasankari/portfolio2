import React from 'react';

const Footer = ({ profile }) => {
  const name = profile?.name || 'Saritha N';
  const displayName = profile?.name ? profile.name.split(' ')[0] : 'Saritha';
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 75,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            {displayName}<span>.</span>
          </div>

          <div className="footer-links">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
              Home
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
              About
            </a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
              Skills
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
              Projects
            </a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>
              Experience
            </a>
            <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')}>
              Certifications
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              Contact
            </a>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {currentYear} {name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
