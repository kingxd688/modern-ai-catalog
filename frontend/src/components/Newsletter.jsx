import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    // Mock submission - will be replaced with backend API
    console.log('Newsletter signup:', email);
    setStatus('success');
    setEmail('');

    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <Mail className="newsletter-icon" />
            <div>
              <h2 className="newsletter-heading">Stay Updated with AI Trends</h2>
              <p className="newsletter-description">
                Get the latest AI tools, tips, and tutorials delivered to your inbox weekly.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <div className="newsletter-success">
              <CheckCircle size={18} />
              <span>Successfully subscribed! Check your inbox.</span>
            </div>
          )}
          {status === 'error' && (
            <div className="newsletter-error">
              <span>Please enter a valid email address.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
