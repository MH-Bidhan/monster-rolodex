import React from "react";
import "./search-box.styles.scss";

const SearchBox = ({ onChange }) => {
  return (
    <input
      placeholder="Search"
      className="search-box"
      onChange={onChange}
      type="text"
    />
  );
};

export default SearchBox;
