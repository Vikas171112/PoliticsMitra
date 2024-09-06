import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Searchbar from "../Searchbox/Searchbar";
import Header from "../Header/Header";

const ListEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events using Axios
  useEffect(() => {
    const fetchEvents = async () => {
      try {
       const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
          "https://politicsmitra-backend.onrender.com/api/event/all",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Correct string interpolation
            },
          }
        );
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) =>
    event.event_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="flex flex-col items-center min-h-screen">
        <div className="w-full max-w-6xl rounded-lg ">
          {/* Search Bar */}
          <div className="mb-6">
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          {/* Event List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array(6) // Display 6 skeleton cards while loading
                  .fill()
                  .map((_, index) => (
                    <SkeletonTheme
                      baseColor="#e0e0e0"
                      highlightColor="#f5f5f5"
                      key={index}
                    >
                      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <Skeleton height={20} width="60%" className="mb-4" />
                        <Skeleton height={180} className="mb-4" />
                        <Skeleton height={20} width="80%" className="mb-2" />
                        <Skeleton height={20} width="90%" className="mb-2" />
                      </div>
                    </SkeletonTheme>
                  ))
              : filteredEvents.map((event) => (
                  <div
                    key={event._id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                  >
                    <h2 className="text-xl font-bold mb-2">
                      {event.event_name}
                    </h2>
                    <img
                      src={event.photo}
                      alt={event.event_name}
                      className="w-full h-60 object-cover rounded-md mb-4"
                    />
                    <p className="mb-2">
                      <strong>Date:</strong> {event.event_date}
                    </p>
                    <p className="mb-2">
                      <strong>Description:</strong> {event.event_description}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListEvents;
