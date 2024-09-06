import React, { useState, useEffect } from "react";
import Card from "./Card";
import Searchbar from "../Searchbox/Searchbar"; // Import the Searchbar component
import Header from "../Header/Header";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PadAdhikariPage() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6IjY2MWEyZTgxNTZjNzA1NjQ3OTU0NjZiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjk5OTMzNiwiZXhwIjoxNzEzNjA0MTM2fQ.O6Be-0-d6rUFgyMIzi3PqHQeaj6LgBf_uw6lTKu6Zuw";
        const response = await axios.get(
          "https://politicsmitra-backend.onrender.com/api/adhikari/all",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Correct string interpolation
            },
          }
        );

        const formattedProfiles = response.data.map((profile) => ({
          name: profile.name,
          details: [
            profile.state,
            profile.district,
            profile.taluka,
            profile.position,
          ],
          imageUrl: profile.photo,
        }));

        setProfiles(formattedProfiles);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching profiles", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchProfiles();
  }, []);

  return (
    <>
      <Header />
      <div className="lg:flex flex-col items-center min-h-screen bg-white ">
        <div className="container mx-auto w-full max-w-6xl">
          {/* Use the Searchbar component */}
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {loading
              ? Array(6) // Show 6 skeleton cards while loading
                  .fill()
                  .map((_, index) => (
                    <SkeletonTheme
                      key={index}
                      baseColor="#e0e0e0"
                      highlightColor="#f5f5f5"
                    >
                      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <Skeleton height={200} className="mb-4" />{" "}
                        {/* Skeleton for image */}
                        <Skeleton
                          height={20}
                          width="60%"
                          className="mb-4"
                        />{" "}
                        {/* Skeleton for name */}
                        <Skeleton count={3} height={20} className="mb-2" />{" "}
                        {/* Skeleton for details */}
                      </div>
                    </SkeletonTheme>
                  ))
              : filteredProfiles.map((profile, index) => (
                  <Card key={index} {...profile} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PadAdhikariPage;
