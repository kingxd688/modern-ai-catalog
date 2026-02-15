import React from 'react';
import { Target, Users, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="page-about">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">About Skill With AI</h1>
          <p className="page-description">
            Empowering learners, creators, and entrepreneurs with AI tools and knowledge
          </p>
        </div>

        {/* Mission Section */}
        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-heading">Our Mission</h2>
              <p className="about-paragraph">
                At Skill With AI, we believe that AI tools should be accessible to everyone. 
                Our mission is to bridge the gap between cutting-edge AI technology and everyday users 
                by providing curated resources, honest reviews, and practical tutorials.
              </p>
              <p className="about-paragraph">
                Whether you're a student looking to ace your studies, a developer aiming to code faster, 
                a creator producing engaging content, or an entrepreneur building your next venture—we're 
                here to guide you through the AI revolution.
              </p>
            </div>
            <div className="about-icon-large">
              <Target size={120} strokeWidth={1} />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title-center">What We Stand For</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Heart size={32} />
              </div>
              <h3 className="value-title">Quality First</h3>
              <p className="value-description">
                Every tool and tutorial is carefully tested and reviewed by our team before 
                we recommend it to you.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Users size={32} />
              </div>
              <h3 className="value-title">Community Driven</h3>
              <p className="value-description">
                We listen to our community and continuously improve based on your feedback 
                and suggestions.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <TrendingUp size={32} />
              </div>
              <h3 className="value-title">Always Updated</h3>
              <p className="value-description">
                The AI landscape changes fast. We stay on top of new tools and trends so 
                you don't have to.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <h2 className="about-heading">Our Story</h2>
          <div className="story-content">
            <p className="about-paragraph">
              Skill With AI started when a group of tech enthusiasts realized how overwhelming 
              it was to navigate the rapidly growing AI tools ecosystem. With hundreds of new 
              tools launching every month, it was hard to separate the truly useful from the hype.
            </p>
            <p className="about-paragraph">
              We created this platform to solve that problem—a one-stop destination where anyone 
              can discover, learn about, and master AI tools that actually make a difference. Today, 
              we serve over 100,000 monthly visitors and continue to grow with the support of our 
              amazing community.
            </p>
            <p className="about-paragraph">
              Our team includes AI researchers, content creators, developers, and educators who are 
              passionate about making AI technology accessible and understandable for everyone.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="about-stats">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">AI Tools Reviewed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Monthly Readers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">In-Depth Guides</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Community Members</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h2 className="about-cta-title">Join Our Journey</h2>
          <p className="about-cta-description">
            Be part of the AI revolution. Subscribe to our newsletter and never miss an update.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
