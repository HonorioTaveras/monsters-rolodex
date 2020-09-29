import React, { useState } from 'react';

import './SearchBox.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        className="search"
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
