import React from 'react';

const Hero = ({ profile }) => {
  const name = profile?.name || 'Saritha N';
  const title = profile?.title || 'Python Full Stack Developer & Computer Science Undergraduate';
  const tagline = profile?.tagline || 'Python | Django | React | SQL';
  const bio = profile?.bio || 'I build complete web applications from frontend to backend using Python, Django, and modern JavaScript frameworks. Passionate about creating seamless user experiences and scalable server solutions.';
  const availability = profile?.availability_status || 'Available for opportunities';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 75,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="availability-badge">
            <span className="pulse-dot"></span>
            {availability}
          </div>
          <h1>
            Hello, I'm <span className="highlight">{name}</span>
          </h1>
          <p className="hero-subtitle">
            <span className="hero-title-text">{title}</span>
            {tagline && (
              <>
                <span className="hero-divider">•</span>
                <span className="hero-tagline-text">{tagline}</span>
              </>
            )}
          </p>
          <p className="hero-description">{bio}</p>

          <div className="hero-btns">
            <button onClick={() => scrollTo('projects')} className="btn btn-view-work">
              View My Projects
            </button>
            <button onClick={() => scrollTo('contact')} className="btn btn-outline">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
