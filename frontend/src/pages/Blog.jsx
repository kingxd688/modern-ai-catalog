import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';
import { blogPosts } from '../mock';

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="page-blog">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">AI Insights & Tutorials</h1>
          <p className="page-description">
            Learn how to leverage AI tools for learning, building, and earning. 
            Expert guides and real-world success stories.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="featured-posts-section">
            <h2 className="section-subtitle">Featured Articles</h2>
            <div className="featured-posts-grid">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="all-posts-section">
          <h2 className="section-subtitle">All Articles</h2>
          <div className="blog-grid">
            {otherPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Blog;
