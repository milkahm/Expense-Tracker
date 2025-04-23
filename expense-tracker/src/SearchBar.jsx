import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mt-6 mb-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search by name or category..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full border px-4 py-2 rounded shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
