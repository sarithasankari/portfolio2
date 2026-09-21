import React, { useState } from 'react';
import { sendContactMessage } from '../services/api';

const Contact = ({ profile, socialLinks = [] }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const email = profile?.email || 'sarithasankari154@gmail.com';
  const phone = profile?.phone || '+91 93613 48040';
  const location = profile?.location || 'India';

  const defaultSocials = [
    { platform: 'Email', url: `mailto:${email}`, icon_class: 'fas fa-envelope' },
    { platform: 'GitHub', url: 'https://github.com/sarithasankari', icon_class: 'fab fa-github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/saritha-n-a872a9299/', icon_class: 'fab fa-linkedin-in' },
    { platform: 'Instagram', url: 'https://www.instagram.com/_._saritha__/', icon_class: 'fab fa-instagram' },
  ];

  const activeSocials = socialLinks.length > 0 ? socialLinks : defaultSocials;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status.type) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await sendContactMessage(formData);
      setStatus({
        type: 'success',
        message: res.message || 'Thank you for your message! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to submit contact message:', err);
      let errorMsg = 'Failed to send message. Please try again later or email directly.';
      if (err.response?.data?.errors) {
        const errorKeys = Object.keys(err.response.data.errors);
        if (errorKeys.length > 0) {
          errorMsg = err.response.data.errors[errorKeys[0]][0] || errorMsg;
        }
      }
      setStatus({
        type: 'error',
        message: errorMsg,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Have a project in mind or want to discuss full-stack opportunities? Let's connect!
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm open to full-time roles, freelance projects, and technical collaborations. Drop me a message and I'll get back to you promptly!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>{email}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>{phone}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{location}</span>
              </div>
            </div>

            <div className="social-links">
              {activeSocials.map((soc, idx) => (
                <a
                  key={soc.id || idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.platform}
                >
                  <i className={soc.icon_class || 'fas fa-link'}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form">
            {status.message && (
              <div
                className={`form-alert ${
                  status.type === 'success' ? 'form-alert-success' : 'form-alert-error'
                }`}
                role="alert"
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-view-work"
                disabled={loading}
                style={{ width: '100%', cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending Message...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
