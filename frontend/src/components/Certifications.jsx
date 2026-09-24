import React, { useState, useEffect } from 'react';

const Certifications = ({ certifications = [], loading = false, error = null }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  const getCertImage = (cert) => {
    if (cert.image_url) return cert.image_url;
    if (cert.image && cert.image.startsWith('http')) return cert.image;
    if (cert.image) {
      const filename = cert.image.split('/').pop();
      return `/images/${filename}`;
    }
    return null;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
          <p className="section-subtitle">Verified professional credentials, internships, and technical achievements</p>
        </div>

        <div className="cert-grid">
          {loading && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: 'var(--gray)' }}>
              <div className="spinner" style={{ margin: '0 auto 15px' }}></div>
              <p>Loading certifications...</p>
            </div>
          )}

          {!loading && error && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: '#e63946' }}>
              <i className="fas fa-exclamation-circle" style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'block' }}></i>
              <p>Failed to load certifications. Please try refreshing or check back later.</p>
            </div>
          )}

          {!loading && !error && certifications.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
              <p>No certifications available right now.</p>
            </div>
          )}

          {!loading && !error && certifications.length > 0 && certifications.map((cert) => {
            const imgSrc = getCertImage(cert);

            return (
              <div key={cert.id || cert.title} className="cert-card">
                {imgSrc && (
                  <div
                    className="cert-img"
                    onClick={() => setSelectedCert({ title: cert.title, img: imgSrc })}
                    role="button"
                    tabIndex={0}
                    aria-label={`View full certificate: ${cert.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedCert({ title: cert.title, img: imgSrc });
                      }
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={cert.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                  <div className="cert-details">
                    <span className="cert-date">{cert.period}</span>
                  </div>
                  {imgSrc && (
                    <button
                      type="button"
                      className="btn"
                      style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                      onClick={() => setSelectedCert({ title: cert.title, img: imgSrc })}
                    >
                      <i className="fas fa-certificate"></i> View Certificate
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedCert && (
        <div
          className="cert-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedCert(null)}
        >
          <button
            className="cert-modal-close"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCert(null);
            }}
            aria-label="Close certificate viewer"
          >
            <i className="fas fa-times"></i>
          </button>
          <div
            className="cert-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="cert-modal-content"
              src={selectedCert.img}
              alt={selectedCert.title}
            />
            <p className="cert-modal-caption">{selectedCert.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
