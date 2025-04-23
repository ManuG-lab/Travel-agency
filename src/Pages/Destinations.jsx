import React from "react";
import PlaceCard from "../Components/PlaceCard";
import { useState } from "react";
import { useEffect } from "react";

function Destinations() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/destinations") // Your JSON server endpoint
        .then((res) => res.json())
        .then((data) => setPlaces(data))
        .catch((err) => console.error("Failed to fetch places", err));
    }, []);
  
    const handleBook = (place) => {
      alert(`You booked: ${place.name}`);
      // Here you can send the booking to your backend using fetch()
    };
  
    return (
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center">Available Destinations</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} onBook={handleBook} />
          ))}
        </div>
      </div>
    );
  
}

export default Destinations;