import React from "react";

function Card({ name, details = [], imageUrl }) {
  return (
    <div className=" rounded-lg shadow-md p-4  bg-gray-200 hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-start">
      {/* Actual image */}
      <img
        src={imageUrl}
        alt={name}
        className="lg:w-50 lg:h-30 sm:w-40 sm:h-30 rounded-lg  mr-4 object-cover"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        {details.map((detail, index) => (
          <div key={index} className="mb-1">
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Card;
