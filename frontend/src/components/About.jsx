import React from 'react';

const About = ({ profile }) => {
  const name = profile?.name || 'Saritha N';
  const aboutIntro = profile?.about_intro || 'A dedicated Python Full Stack Developer with a strong foundation in building responsive user interfaces, robust backend architectures, and database solutions using Python, Django, React, and SQL.';
  const degree = 'B.Sc CS';
  const university = 'Periyar University';
  const projectsCount = profile?.projects_count || '5+';
  const certsCount = profile?.certifications_count || '9+';
  const techCount = profile?.technologies_count || '20+';

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h2>Hello, I'm {name}</h2>
            <p className="about-intro">{aboutIntro}</p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="highlight-text">
                  <h4>Frontend Development</h4>
                  <p>
                    Creating responsive, intuitive user interfaces with React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap, and Tailwind CSS.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-server"></i>
                </div>
                <div className="highlight-text">
                  <h4>Backend Development</h4>
                  <p>
                    Developing robust server-side architectures, REST APIs, and database solutions using Python, Django, Django REST Framework, and MySQL.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="highlight-text">
                  <h4>Problem Solving & Clean Architecture</h4>
                  <p>
                    Passionate about writing clean, maintainable code, debugging real-world issues, and delivering efficient full-stack features.
                  </p>
                </div>
              </div>
            </div>

            <p>
              I have gained hands-on practical experience through internships at KY Technologies and CodeBind Technologies, building full-stack applications with dynamic frontend integration, REST APIs, and database management.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <i className="fas fa-graduation-cap"></i>
              <h3>{degree}</h3>
              <p>{university} (2022-2025)</p>
            </div>
            <div className="stat">
              <i className="fas fa-briefcase"></i>
              <h3>{projectsCount}</h3>
              <p>Projects Built</p>
            </div>
            <div className="stat">
              <i className="fas fa-award"></i>
              <h3>{certsCount}</h3>
              <p>Certifications</p>
            </div>
            <div className="stat">
              <i className="fas fa-code"></i>
              <h3>{techCount}</h3>
              <p>Technologies & Tools</p>
            </div>
          </div>
        </div>

        <div className="about-info">
          <div className="info-card">
            <h3>
              <i className="fas fa-rocket"></i> My Approach
            </h3>
            <p>
              I believe in writing clean, modular code that solves real problems. My development process focuses on:
            </p>
            <ul className="info-list">
              <li>
                <i className="fas fa-check-circle"></i> User-centered & responsive web design
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Scalable REST API integration
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Database schema optimization & CRUD workflows
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Clean, maintainable, and well-structured code
              </li>
            </ul>
          </div>

          <div className="info-card">
            <h3>
              <i className="fas fa-graduation-cap"></i> Technical Focus & Goals
            </h3>
            <p>Focused on delivering modern full-stack solutions with:</p>
            <ul className="info-list">
              <li>
                <i className="fas fa-check-circle"></i> Python & Django REST Framework
              </li>
              <li>
                <i className="fas fa-check-circle"></i> React.js Dynamic Single-Page Applications
              </li>
              <li>
                <i className="fas fa-check-circle"></i> SQL & Relational Database Design
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Continuous Learning & Best Coding Practices
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
