import React, { useState } from "react";

function EditDestinationForm({ destination, onUpdate }) {
  const [formData, setFormData] = useState({
    name: destination.name,
    country: destination.country,
    description: destination.description,
    image: destination.image,
    price: destination.price,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/destinations/${destination.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, id: destination.id }),
    })
      .then((res) => res.json())
      .then(onUpdate);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-yellow-100 p-4 rounded mb-4">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mb-2 p-2 w-full border rounded"
        placeholder="Destination Name"
      />
      <input
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="mb-2 p-2 w-full border rounded"
        placeholder="Country"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="mb-2 p-2 w-full border rounded"
        placeholder="Description"
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        className="mb-2 p-2 w-full border rounded"
        placeholder="Image URL"
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        className="mb-2 p-2 w-full border rounded"
        placeholder="Price"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSubmit} >Save</button>
    </form>
  );
}

export default EditDestinationForm;
