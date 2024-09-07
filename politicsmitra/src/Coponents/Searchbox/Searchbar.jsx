import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";

function Searchbar({ searchTerm, setSearchTerm }) {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="externaldiv">
      <div className="searchbar-conatiner">
        <div className="searchicon">
          <SearchIcon />
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
