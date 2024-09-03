import React from "react";
import "./Cards.css";

function Cards({ image, title, description }) {
  return (
    <div>
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
