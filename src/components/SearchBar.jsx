import React, { useState } from 'react';

function SearchBar({ dataAPI, update }){
  const [term, setTerm] = useState('')

  const dataSearch = e => {
    const value = e.target.value.toLowerCase();

    const filter = dataAPI.filter(planet => {
      return planet.name.toLowerCase().includes(value);
    });

    update({
      dataAPI: filter,
    });

    setTerm(value)

  };

  return (
    <>
      <input
        value={term}
        type="text"
        className="search-input"
        placeholder="Search planet by name..."
        onChange={dataSearch}
      />
    </>
  );
};

export default SearchBar