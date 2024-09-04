import React, { useState } from "react";
import Searchbar from "../Searchbox/Searchbar";

const dummyEvents = [
  {
    _id: "1",
    event_name: "Tech Conference 2024",
    event_date: "2024-10-15",
    event_description: "A conference for tech enthusiasts and professionals.",
    photo:
      "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
  },
  {
    _id: "2",
    event_name: "Art Gallery Exhibition",
    event_date: "2024-11-20",
    event_description:
      "An exhibition showcasing modern art from local artists.",
    photo:
      "https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0&h=180",
  },
  {
    _id: "3",
    event_name: "Food Festival",
    event_date: "2024-12-05",
    event_description: "A festival featuring food from around the world.",
    photo:
      "https://tse4.mm.bing.net/th?id=OIP.Ymp2QykpzP3rfqFkAzDjHgHaFD&pid=Api&P=0&h=180",
  },
  {
    _id: "4",
    event_name: "Food Festival",
    event_date: "2024-12-05",
    event_description: "A festival featuring food from around the world.",
    photo:
      "https://tse4.mm.bing.net/th?id=OIP.Ymp2QykpzP3rfqFkAzDjHgHaFD&pid=Api&P=0&h=180",
  },
  {
    _id: "5",
    event_name: "Tech Conference 2024",
    event_date: "2024-10-15",
    event_description: "A conference for tech enthusiasts and professionals.",
    photo:
      "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
  },
  {
    _id: "6",
    event_name: "Art Gallery Exhibition",
    event_date: "2024-11-20",
    event_description:
      "An exhibition showcasing modern art from local artists.",
    photo:
      "https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0&h=180",
  },
];

const ListEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEvents = dummyEvents.filter((event) =>
    event.event_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen  ">
      <div className="w-full max-w-6xl rounded-lg ">
        {/* Search Bar */}
        <div className="mb-6">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        {/* Event List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event._id}
              className="bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-2">{event.event_name}</h2>
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
  );
};

export default ListEvents;
