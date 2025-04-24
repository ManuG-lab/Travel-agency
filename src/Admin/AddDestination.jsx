import React, { useState } from "react";

function AddDestinationForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    description: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    })
      .then((res) => res.json())
      .then((newDestination) => {
        onAdd(newDestination);
        setFormData({
          name: "",
          country: "",
          description: "",
          image: "",
          price: "",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-purple-100 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-3 text-purple-700">Add New Destination</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mb-2 p-2 w-full border rounded"
        placeholder="Destination Name"
        required
      />
      <input
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="mb-2 p-2 w-full border rounded"
        placeholder="Country"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="mb-2 p-2 w-full border rounded"
        placeholder="Description"
        required
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        className="mb-2 p-2 w-full border rounded"
        placeholder="Image URL"
        required
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        className="mb-2 p-2 w-full border rounded"
        placeholder="Price"
        required
      />
      <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
        Add Destination
      </button>
    </form>
  );
}

export default AddDestinationForm;
