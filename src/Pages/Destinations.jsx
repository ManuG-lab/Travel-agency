import React from "react";
import PlaceCard from "../Components/PlaceCard";
import Navbar from "../Components/NavBar";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Destinations() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/destinations") // Your JSON server endpoint
        .then((res) => res.json())
        .then((data) => setPlaces(data))
    }, []);
  
    const handleBook = (place) => {
        const bookingData = {
            name: place.name,
            country: place.country,
            price: place.price,
            image: place.image,
            description: place.description,
        };
        fetch("http://localhost:3000/bookings", {
          method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })
        .then((res) => res.json())
        .then((data) => {
            toast.success("Added to Bookings!");
        })
    };
  
    return (
      <div>
        <Navbar />
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center">Available Destinations</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} onBook={handleBook} />
          ))}
        </div>
      </div>
      /</div>
    );
  
}

export default Destinations;