import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./Gallery.css";

function Gallery({ searchTerm }) {
  // Accept searchTerm as a prop
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      const accessToken = localStorage.getItem("accessToken");
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
        const data = await response.json();
        setGalleryData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Filter galleryData based on searchTerm
  const filteredData = galleryData.filter((item) =>
    item.photo_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gallery">
      {loading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <Cards key={index} loading={loading} />
        ))
      ) : filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <Cards key={index} image={item.photo} title={item.photo_name} />
        ))
      ) : (
        <p>No gallery data available.</p>
      )}
    </div>
  );
}

export default Gallery;
