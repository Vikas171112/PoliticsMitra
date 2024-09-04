import React from "react";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Searchbar from "../Searchbox/Searchbar";

function Homepage() {
  const cardData = [
    {
      image: "https://via.placeholder.com/300x200",
      title: "Card 1",
      description: "This is the description for Card 1.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Card 2",
      description: "This is the description for Card 2.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Card 3",
      description: "This is the description for Card 3.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Card 4",
      description: "This is the description for Card 4.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Card 5",
      description: "This is the description for Card 5.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Card 6",
      description: "This is the description for Card 6.",
    },
  ];

  return (
    <div>
      <Searchbar />
      <Gallery cards={cardData} />
    </div>
  );
}

export default Homepage;
