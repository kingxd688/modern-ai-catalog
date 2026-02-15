import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../mock';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));
  
  // Get related posts (same category, different post)
  const relatedPosts = post 
    ? blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3)
    : [];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = window.location.href;
  const shareText = post.title;

  return (
    <div className="page-blog-post">
      <div className="container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        <article className="blog-post-article">
          {/* Header */}
          <header className="blog-post-header">
            <span className="blog-post-category">{post.category}</span>
            <h1 className="blog-post-title">{post.title}</h1>
            
            <div className="blog-post-meta">
              <span className="blog-post-author">By {post.author}</span>
              <span className="blog-meta-separator">•</span>
              <span className="blog-meta-item">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="blog-meta-separator">•</span>
              <span className="blog-meta-item">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="blog-post-image">
            <span className="blog-post-image-icon">{post.image}</span>
          </div>

          {/* Content */}
          <div className="blog-post-content">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="content-heading">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="content-subheading">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.trim()) {
                return <p key={index} className="content-paragraph">{paragraph}</p>;
              }
              return null;
            })}
          </div>

          {/* Share */}
          <div className="blog-post-share">
            <h4 className="share-heading">
              <Share2 size={18} />
              Share this article
            </h4>
            <div className="share-buttons">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-twitter"
              >
                <Twitter size={18} />
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-linkedin"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-facebook"
              >
                <Facebook size={18} />
                Facebook
              </a>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts-section">
            <h3 className="section-subtitle">Related Articles</h3>
            <div className="blog-grid">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
