import { parse } from "postcss";
import React, { useEffect, useState } from "react";

 function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formValues, setFormValues] = useState({});

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

  const handleRemove = (id) => {
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to remove booking");
        return res.json();
      })
      .then(() => {
        // Remove booking from page
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.id !== id)
        );
      })
      .catch((err) => {
        console.error("Error removing booking:", err);
      });
  };

  function handleFormChange(id, field, value){
    setFormValues((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  }


  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">My Bookings</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-600">You have no bookings yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {bookings.map((booking) => {
          const form = formValues[booking.id] || {};
          const peopleCount = parseInt(form.people || 1);
          const totalPrice = booking.price * peopleCount;

          return (
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

                {/* Booking Form */}
                <form className="mt-4 space-y-2">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name || ""}
                    onChange={(e) => handleFormChange(booking.id, "name", e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email || ""}
                    onChange={(e) => handleFormChange(booking.id, "email", e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone || ""}
                    onChange={(e) => handleFormChange(booking.id, "phone", e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                  />
                  <input
                    type="number"
                    min="1"
                    placeholder="Number of People"
                    value={form.people || 1}
                    onChange={(e) => handleFormChange(booking.id, "people", e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                  />
                </form>

                <p className="mt-2 font-bold text-green-600">
                  Total Price: ${totalPrice}
                </p>
              </div>
              <button
                onClick={() => handleRemove(booking.id)}
                className="w-full bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    )}

    <button className="mt-10 w-full bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition">
      Confirm Booking
    </button>
  </div>
);
}

export default Bookings;