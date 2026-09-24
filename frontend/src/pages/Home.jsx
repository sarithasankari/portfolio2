import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Home = ({
  profile,
  skills,
  projects,
  experiences,
  educations,
  certifications,
  socialLinks,
  loadingStates = {},
  errors = {},
}) => {
  return (
    <main>
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills skills={skills} />
      <Projects
        projects={projects}
        loading={loadingStates.projects}
        error={errors.projects}
      />
      
      {/* Experience and Education Combined Timeline Section */}
      <section id="experience" className="timeline-section">
        <div className="container">
          <div className="section-title">
            <h2>Experience & Education</h2>
            <p className="section-subtitle">My professional journey, internships, and educational background</p>
          </div>
          <div className="timeline-grid">
            <Experience
              experiences={experiences}
              loading={loadingStates.experiences}
              error={errors.experiences}
            />
            <Education
              educations={educations}
              loading={loadingStates.educations}
              error={errors.educations}
            />
          </div>
        </div>
      </section>

      <Certifications
        certifications={certifications}
        loading={loadingStates.certifications}
        error={errors.certifications}
      />
      <Contact profile={profile} socialLinks={socialLinks} />
    </main>
  );
};

export default Home;
