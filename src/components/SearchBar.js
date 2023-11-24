import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [word, setWord] = useState('');

  const handleSearch = () => {
    if (word.trim() !== '') {
      onSearch(word);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
