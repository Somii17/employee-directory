import React from 'react';

/**
 * SearchBar component for filtering employees
 * @param {Function} onSearch - Callback function when search input changes
 */
const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or department..."
        onChange={handleSearchChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;