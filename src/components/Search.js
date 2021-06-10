import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="searchbar">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Search"
      ></input>
    </div>
  );
};

export default Search;
