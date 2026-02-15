import React from 'react';
import { ExternalLink, Star, Users } from 'lucide-react';

const ToolCard = ({ tool }) => {
  return (
    <div className="tool-card">
      <div className="tool-card-header">
        <div className="tool-logo">{tool.logo}</div>
        <div className="tool-meta">
          <div className="tool-rating">
            <Star size={14} fill="currentColor" />
            <span>{tool.rating}</span>
          </div>
          <div className="tool-users">
            <Users size={14} />
            <span>{tool.users}</span>
          </div>
        </div>
      </div>

      <h3 className="tool-name">{tool.name}</h3>
      <p className="tool-description">{tool.description}</p>

      <div className="tool-footer">
        <span className="tool-category">{tool.category}</span>
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-link"
        >
          Visit
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ToolCard;
