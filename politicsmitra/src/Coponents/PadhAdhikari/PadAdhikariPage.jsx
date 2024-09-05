import React, { useState } from "react";
import Card from "./Card";
import Searchbar from "../Searchbox/Searchbar"; // Import the Searchbar component
import Header from "../Header/Header";

function PadAdhikariPage() {
  const profiles = [
    {
      name: "Virat",
      details: ["Delhi", "Delhi", "xyz", "MLA"],
      imageUrl:
        "https://i.pinimg.com/236x/d8/20/95/d8209588924377a85965e305401e924d.jpg", // Example URL
    },
    {
      name: "Sanjay",
      details: ["mah", "mumbai", "borivali", "pramukh"],
      imageUrl:
        "https://i.pinimg.com/236x/d8/20/95/d8209588924377a85965e305401e924d.jpg", // Example URL
    },
    {
      name: "Sanjay",
      details: ["mah", "mumbai", "borivali", "pramukh"],
      imageUrl:
        "https://i.pinimg.com/236x/d8/20/95/d8209588924377a85965e305401e924d.jpg", // Example URL
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="lg:flex flex-col items-center min-h-screen bg-white ">
        <div className="container mx-auto  w-full max-w-6xl">
          {/* Use the Searchbar component */}
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {filteredProfiles.map((profile, index) => (
              <Card key={index} {...profile} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PadAdhikariPage;
