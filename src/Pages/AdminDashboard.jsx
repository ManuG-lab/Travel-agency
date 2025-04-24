import React from "react";

function AdminDashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg mb-2">Welcome to the admin dashboard!</p>
      <p className="text-lg">You can manage bookings and users from here.</p>
    </div>
  );
}

export default AdminDashboard;