import React from 'react';

const Education = ({ educations = [] }) => {
  return (
    <div className="timeline-column">
      <h3>
        <i className="fas fa-graduation-cap"></i> Education & Academics
      </h3>
      <div className="timeline">
        {educations.map((edu) => (
          <div key={edu.id || edu.degree} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">{edu.period}</span>
              <h4>{edu.degree}</h4>
              <div className="timeline-subtitle">
                {edu.institution} {edu.location ? `• ${edu.location}` : ''}
              </div>
              {edu.description && <p>{edu.description}</p>}
            </div>
          </div>
        ))}
        {educations.length === 0 && (
          <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>No education records available.</p>
        )}
      </div>
    </div>
  );
};

export default Education;
