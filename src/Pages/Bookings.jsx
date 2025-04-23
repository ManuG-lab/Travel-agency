import React, { useEffect, useState } from "react";

 function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/bookings")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch bookings");
        return res.json();
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">My Bookings</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-600">You have no bookings yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={booking.image}
                alt={booking.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-purple-800">{booking.name}</h2>
                <p className="text-gray-600 mt-2">{booking.country}</p>
                <p className="text-gray-600 mt-1">{booking.description}</p>
                <p className="text-gray-600 mt-2">Package: 3 Nights + Tour Guide</p>
                <p className="text-purple-600 font-medium mt-2">Price Per Person: ${booking.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;