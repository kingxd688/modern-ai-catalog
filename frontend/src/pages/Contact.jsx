import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock submission - will be replaced with backend API
    console.log('Contact form submission:', formData);
    setStatus('success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <div className="page-contact">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-description">
            Have questions, suggestions, or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="contact-section-title">Send Us a Message</h2>
            
            {status === 'success' ? (
              <div className="contact-success">
                <CheckCircle size={48} />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us more..."
                    rows="6"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary btn-full">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h2 className="contact-section-title">Other Ways to Reach Us</h2>
            
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Mail size={24} />
                </div>
                <h3 className="contact-info-title">Email</h3>
                <p className="contact-info-text">hello@skillwithai.com</p>
                <p className="contact-info-subtext">We reply within 24-48 hours</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MessageSquare size={24} />
                </div>
                <h3 className="contact-info-title">Community</h3>
                <p className="contact-info-text">Join our Discord</p>
                <p className="contact-info-subtext">Connect with other AI enthusiasts</p>
              </div>
            </div>

            <div className="contact-faq">
              <h3 className="contact-faq-title">Frequently Asked Questions</h3>
              <ul className="contact-faq-list">
                <li>
                  <strong>How do I submit a tool?</strong>
                  <p>Email us with the tool details and we'll review it for inclusion.</p>
                </li>
                <li>
                  <strong>Can I contribute articles?</strong>
                  <p>Yes! We welcome guest posts. Send us your pitch via the form above.</p>
                </li>
                <li>
                  <strong>Partnership inquiries?</strong>
                  <p>Contact us with "Partnership" in the subject line.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
