import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";

function Searchbar() {
  return (
    <div className="externaldiv">
      <div className="searchbar-conatiner">
        <div className="searchicon">
          <SearchIcon />
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
