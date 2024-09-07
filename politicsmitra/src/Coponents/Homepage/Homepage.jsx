import React, { useState } from "react";
import Header from "../Header/Header";
import Searchbar from "../Searchbox/Searchbar";
import Gallery from "../Gallery/Gallery";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState(""); // Search state

  return (
    <div>
      <Header />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Pass searchTerm to Gallery */}
      <Gallery searchTerm={searchTerm} />
    </div>
  );
}

export default Homepage;
