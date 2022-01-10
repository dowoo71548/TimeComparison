import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='flex-container'>
      <input
        className='searchBox'
        type='search'
        placeholder='Search a city'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;