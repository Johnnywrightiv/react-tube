import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm]= useState('');;

  return (
    <div className="search-bar">
      <input
        value={term}
        onChange={event => {
          setTerm(event.target.value)
          props.videoSearch(term)
        }}
      />
  </div>
  );
};

export default SearchBar;