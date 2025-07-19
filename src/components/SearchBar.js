import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../css/searchbar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search jobs or internships..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>
        <FaSearch className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
