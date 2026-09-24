import React from 'react';

const Experience = ({ experiences = [], loading = false, error = null }) => {
  return (
    <div className="timeline-column">
      <h3>
        <i className="fas fa-briefcase"></i> Work Experience
      </h3>
      <div className="timeline">
        {loading && (
          <div style={{ padding: '20px 0', textAlign: 'center', color: 'var(--gray)' }}>
            <div className="spinner" style={{ width: '28px', height: '28px', margin: '0 auto 10px' }}></div>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Loading experience records...</p>
          </div>
        )}

        {!loading && error && (
          <div style={{ padding: '15px 0', color: '#e63946', fontSize: '0.9rem' }}>
            <p style={{ margin: 0 }}>
              <i className="fas fa-exclamation-circle" style={{ marginRight: '6px' }}></i>
              Unable to load experience records at this moment.
            </p>
          </div>
        )}

        {!loading && !error && experiences.length === 0 && (
          <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>No experience records available.</p>
        )}

        {!loading && !error && experiences.length > 0 && experiences.map((exp) => (
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
      </div>
    </div>
  );
};

export default Experience;
