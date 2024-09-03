import React from "react";
import Cards from "../Cards/Cards";
import "./Gallery.css";

function Gallery({ cards }) {
  return (
    <div className="gallery">
      {cards.map((card, index) => (
        <Cards
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default Gallery;
