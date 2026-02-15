import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Users, BookOpen } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';
import { aiTools, blogPosts, stats } from '../mock';

const Home = () => {
  const featuredTools = aiTools.filter(tool => tool.featured).slice(0, 4);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Your AI Learning Hub</span>
            </div>
            <h1 className="hero-title">
              Discover the Best AI Tools to
              <span className="hero-title-gradient"> Learn, Build & Earn</span>
            </h1>
            <p className="hero-description">
              Explore curated AI tools and resources designed for students, developers, and creators. 
              Master the tools shaping the future, today.
            </p>
            <div className="hero-buttons">
              <Link to="/tools" className="btn-primary">
                Explore AI Tools
                <ArrowRight size={20} />
              </Link>
              <Link to="/blog" className="btn-secondary">
                Read Blog
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Featured AI Tools</h2>
              <p className="section-description">
                Top-rated tools trusted by millions of users worldwide
              </p>
            </div>
            <Link to="/tools" className="section-link">
              View All Tools
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="tools-grid">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">Why Choose Skill With AI?</h2>
            <p className="section-description">
              Everything you need to master AI tools in one place
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={28} />
              </div>
              <h3 className="feature-title">Curated Selection</h3>
              <p className="feature-description">
                Hand-picked AI tools tested and reviewed by experts. No fluff, just quality.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen size={28} />
              </div>
              <h3 className="feature-title">Learn & Grow</h3>
              <p className="feature-description">
                Comprehensive tutorials and guides to help you master each tool effectively.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={28} />
              </div>
              <h3 className="feature-title">Community Driven</h3>
              <p className="feature-description">
                Join thousands of learners sharing tips, tricks, and success stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Latest from Our Blog</h2>
              <p className="section-description">
                Tips, tutorials, and insights on using AI tools effectively
              </p>
            </div>
            <Link to="/blog" className="section-link">
              View All Posts
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="blog-grid">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Home;
