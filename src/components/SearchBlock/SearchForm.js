import React from 'react';

/** Показывает форму поиска */
const SearchForm = props => {
  return (
    <div className="search-form">
      <input type="text" style={{width: '100%'}}/><input type="submit"/>
    </div>
  );
};

export default SearchForm;