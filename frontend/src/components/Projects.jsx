import React from 'react';

const Projects = ({ projects = [] }) => {
  // Helper to resolve project image safely
  const getProjectImage = (project) => {
    if (project.image_url) return project.image_url;
    if (project.image && project.image.startsWith('http')) return project.image;
    if (project.image) {
      const filename = project.image.split('/').pop();
      return `/images/${filename}`;
    }
    return '/images/road.jpg';
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p className="section-subtitle">Real-world full-stack web applications and interactive systems</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const tags = project.tag_list || (project.tags ? project.tags.split(',').map(t => t.trim()) : []);
            const imgSrc = getProjectImage(project);

            return (
              <div key={project.id || project.title} className="project-card">
                <div className="project-img">
                  <img
                    src={imgSrc}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/road.jpg';
                    }}
                  />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tags">
                    {tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.link && (
                      <a
                        href={project.link}
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-arrow-up-right-from-square"></i> Live Demo
                      </a>
                    )}
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i> Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {projects.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
              <p>No projects available right now.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
