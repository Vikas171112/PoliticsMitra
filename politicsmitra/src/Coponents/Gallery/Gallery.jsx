import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards"; // Import the Cards component
import "./Gallery.css";

function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(
          "https://politicsmitra-backend.onrender.com/api/gallery/all",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pIjY2MWEyZTgxNTZjNzA1NjQ3OTU0NjZiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjk5OTMzNiwiZXhwIjoxNzEzNjA0MTM2fQ.O6Be-0-d6rUFgyMIzi3PqHQeaj6LgBf_uw6lTKu6Zuw`,
            },
          }
        );

        const data = await response.json();
        setGalleryData(data.gallery || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <div className="gallery">
      {loading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <Cards key={index} loading={loading} />
        ))
      ) : galleryData.length > 0 ? (
        galleryData.map((item, index) => (
          <Cards
            key={index}
            image={item.photo}
            title={item.photo_name}
            description={item.description || "No description available"}
          />
        ))
      ) : (
        <p>No gallery data available.</p>
      )}
    </div>
  );
}

export default Gallery;
