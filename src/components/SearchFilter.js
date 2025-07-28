import React from "react";
import "./SearchFilter.css";

const SearchFilter = ({ searchTerm, onSearchChange }) => {
    return (
    <div className="search-filter">
      <div className="search-container">
        <div className="search-input-wrapper">
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
              onClick={() => onSearchChange("")}
              title="Clear search"
            >
            </button>
          )}
        </div>
      </div>
    </div>
  )
};

export default SearchFilter;
