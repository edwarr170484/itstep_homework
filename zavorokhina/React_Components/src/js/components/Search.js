import React, { useState } from 'react';

const Search = ({ data, renderItem }) => {
  const [query, setQuery] = useState('');

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <ul className="search-results">
        {filteredData.map((item, index) => (
          <li key={index} className="search-item">
            {renderItem ? renderItem(item) : item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;