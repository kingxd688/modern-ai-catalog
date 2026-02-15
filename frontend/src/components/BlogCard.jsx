import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, featured = false }) => {
  return (
    <Link to={`/blog/${post.id}`} className={`blog-card ${featured ? 'featured' : ''}`}>
      <div className="blog-card-image">
        <span className="blog-image-icon">{post.image}</span>
        <div className="blog-card-overlay">
          <span className="blog-category-badge">{post.category}</span>
        </div>
      </div>

      <div className="blog-card-content">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>

        <div className="blog-card-meta">
          <div className="blog-meta-left">
            <span className="blog-meta-item">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
            <span className="blog-meta-item">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
          <span className="blog-read-more">
            Read More <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
