// Cards.jsx
import React from "react";
import "./Cards.css";

// Skeleton card component
function CardSkeleton() {
  return (
    <div className="card skeleton-card">
      <div className="skeleton-image"></div>
      <div className="card-content">
        <h3 className="skeleton-title"></h3>
      </div>
    </div>
  );
}

function Cards({ image, title, loading }) {
  // If loading is true, show the skeleton card
  if (loading) {
    return <CardSkeleton />;
  }

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
}

export default Cards;
