import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '5rem', color: 'var(--primary)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Page Not Found</h2>
      <p style={{ maxWidth: '500px', marginBottom: '2rem' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn">
        <i className="fas fa-home"></i> Back to Home
      </a>
    </div>
  );
};

export default NotFound;
