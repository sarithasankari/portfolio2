import React from 'react';

const Education = ({ educations = [], loading = false, error = null }) => {
  return (
    <div className="timeline-column">
      <h3>
        <i className="fas fa-graduation-cap"></i> Education & Academics
      </h3>
      <div className="timeline">
        {loading && (
          <div style={{ padding: '20px 0', textAlign: 'center', color: 'var(--gray)' }}>
            <div className="spinner" style={{ width: '28px', height: '28px', margin: '0 auto 10px' }}></div>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Loading education records...</p>
          </div>
        )}

        {!loading && error && (
          <div style={{ padding: '15px 0', color: '#e63946', fontSize: '0.9rem' }}>
            <p style={{ margin: 0 }}>
              <i className="fas fa-exclamation-circle" style={{ marginRight: '6px' }}></i>
              Unable to load education records at this moment.
            </p>
          </div>
        )}

        {!loading && !error && educations.length === 0 && (
          <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>No education records available.</p>
        )}

        {!loading && !error && educations.length > 0 && educations.map((edu) => (
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
      </div>
    </div>
  );
};

export default Education;
