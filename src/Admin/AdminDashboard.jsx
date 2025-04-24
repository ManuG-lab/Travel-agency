import React, { useEffect, useState } from "react";
import EditDestinationForm from "./EditDestination";
import AddDestinationForm from "./AddDestination";
import AdminNavbar from "./AdminNavBar";

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

 
  return (
    <div>
      <AdminNavbar />
    </div>
  );
}

export default AdminDashboard;
