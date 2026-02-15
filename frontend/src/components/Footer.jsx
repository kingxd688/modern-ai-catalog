import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <Sparkles className="footer-brand-icon" />
              <span>Skill With AI</span>
            </div>
            <p className="footer-description">
              Discover the best AI tools to learn, build, and earn. Your gateway to the AI revolution.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Github size={20} />
              </a>
              <a href="mailto:hello@skillwithai.com" className="footer-social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tools">AI Tools</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><Link to="/tools?category=students">AI for Students</Link></li>
              <li><Link to="/tools?category=coding">AI for Coding</Link></li>
              <li><Link to="/tools?category=content">AI for Content</Link></li>
              <li><Link to="/tools?category=money">AI for Money</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#newsletter">Newsletter</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Skill With AI. All rights reserved.</p>
          <p className="footer-tagline">Built with AI tools • Powered by passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
