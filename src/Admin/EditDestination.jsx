import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavBar";

function EditDestinationForm({ destination, onUpdate }) {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    description: "",
    image: "",
    price: "",
  });

  // Initialize form data when destination changes
  useEffect(() => {
    if (destination) {
      setFormData({
        name: destination.name || "",
        country: destination.country || "",
        description: destination.description || "",
        image: destination.image || "",
        price: destination.price || "",
      });
    }
  }, [destination]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/destinations/${destination.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, id: destination.id }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update destination");
        return res.json();
      })
      .then((updatedData) => {
        onUpdate(updatedData); // Pass updated destination back
      })
      .catch((err) => console.error("Update error:", err));
  };

  if (!destination) {
    return <p className="text-center text-gray-500">Select a destination to edit.</p>;
  }

  return (
    <div>
    <AdminNavbar />
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg max-w-lg mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Edit Destination</h2>
      
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mb-3 p-2 w-full border rounded"
        placeholder="Destination Name"
      />
      <input
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="mb-3 p-2 w-full border rounded"
        placeholder="Country"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="mb-3 p-2 w-full border rounded"
        placeholder="Description"
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        className="mb-3 p-2 w-full border rounded"
        placeholder="Image URL"
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
        placeholder="Price"
      />
      
      <button
        type="submit"
        className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
      >
        Save Changes
      </button>
    </form>
    </div>
  );
}

export default EditDestinationForm;
