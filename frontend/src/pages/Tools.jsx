import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import { aiTools, categories } from '../mock';

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Real-time filtering
  const filteredTools = useMemo(() => {
    return aiTools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="page-tools">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">AI Tools Directory</h1>
          <p className="page-description">
            Discover and explore {aiTools.length}+ AI tools across different categories. 
            Find the perfect tool for your needs.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="tools-filter-bar">
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search tools by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            <Filter size={18} />
            <span className="filter-label">Filter:</span>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>
            Showing <strong>{filteredTools.length}</strong> {filteredTools.length === 1 ? 'tool' : 'tools'}
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="tools-grid">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No tools found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;
