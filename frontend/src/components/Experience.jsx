import React from 'react';

const Experience = ({ experiences = [] }) => {
  return (
    <div className="timeline-column">
      <h3>
        <i className="fas fa-briefcase"></i> Work Experience
      </h3>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id || exp.title} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">{exp.period}</span>
              <h4>{exp.title}</h4>
              <div className="timeline-subtitle">
                {exp.company} {exp.location ? `• ${exp.location}` : ''}
              </div>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
        {experiences.length === 0 && (
          <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>No experience records available.</p>
        )}
      </div>
    </div>
  );
};

export default Experience;
