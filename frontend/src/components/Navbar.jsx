import React, { useState, useEffect } from 'react';

const Navbar = ({ profile }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 75,
        behavior: 'smooth',
      });
    }
  };

  const displayName = profile?.name ? profile.name.split(' ')[0] : 'Saritha';

  return (
    <header style={{
      background: scrolled ? 'rgba(235, 243, 237, 0.98)' : 'rgba(235, 243, 237, 0.94)',
      boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.04)',
    }}>
      <div className="container header-container">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
          {displayName}<span>.</span>
        </a>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              className={activeSection === 'certifications' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'certifications')}
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
