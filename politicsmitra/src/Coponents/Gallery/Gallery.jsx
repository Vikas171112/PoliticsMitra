import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards"; // Import the Cards component
import "./Gallery.css";

function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchGalleryData = async () => {
      const accessToken = localStorage.getItem("accessToken"); // Retrieve the accessToken from localStorage

      if (!accessToken) {
        console.error("Access token not found");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(
          "https://politicsmitra-backend.onrender.com/api/gallery/all",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          console.error("Failed to fetch gallery data:", response.statusText);
          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log("Fetched data:", data); // Inspect the data structure

        // Since data is already an array of gallery items
        if (Array.isArray(data)) {
          setGalleryData(data); // Set the gallery data directly
        } else {
          console.warn("Unexpected data format:", data);
        }

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
          <Cards key={index} image={item.photo} title={item.photo_name} />
        ))
      ) : (
        <p>No gallery data available.</p>
      )}
    </div>
  );
}

export default Gallery;
