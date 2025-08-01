import React from 'react';
import './SearchFilter.css';

const SearchFilter = ({ searchTerm, onSearchChange, expenseCount }) => {
  return (
    <div className="search-filter">
      <div className="search-container">
        <div className="search-input-wrapper">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search expenses by description..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button
              className="clear-search"
              onClick={() => onSearchChange('')}
              title="Clear search"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>
        <div className="search-stats">
          <span className="expense-count">
            {expenseCount} expense{expenseCount !== 1 ? 's' : ''} found
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
