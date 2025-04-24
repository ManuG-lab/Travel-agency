import React, { useEffect, useState } from "react";
import EditDestinationForm from "./EditDestination";
import AddDestinationForm from "./AddDestination";

function AdminDashboard() {
  const [destinations, setDestinations] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/destinations/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        setDestinations((prev) => prev.filter((d) => d.id !== id));
      });
  };

  const handleUpdate = (updated) => {
    setDestinations((prev) =>
      prev.map((d) => (d.id === updated.id ? updated : d))
    );
    setEditing(null);
  };

  const handleAdd = (newDestination) => {
    setDestinations((prev) => [...prev, newDestination]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Admin Dashboard</h1>

      <AddDestinationForm onAdd={handleAdd} />

      <div className="mt-6">
        {destinations.map((destination) =>
          editing === destination.id ? (
            <EditDestinationForm
              key={destination.id}
              destination={destination}
              onUpdate={handleUpdate}
            />
          ) : (
            <div
              key={destination.id}
              className="bg-white p-4 mb-4 shadow rounded"
            >
              <h2 className="text-xl font-semibold">{destination.name}</h2>
              <p>{destination.country}</p>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => setEditing(destination.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(destination.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
