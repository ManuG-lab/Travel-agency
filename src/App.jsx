import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { useState } from "react";
import Landing from "./Pages/Landing";
import Navbar from "./Components/NavBar";
import Bookings from "./Pages/Bookings";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Destinations from "./Pages/Destinations";
import AdminRoute from "./Admin/AdminRoute";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";

function App(){
const [isAdmin, setIsAdmin] = useState(false);
  return(
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
       
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-bookings" element={<Bookings />} />
        <Route path="/adminLogin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
        <Route path="/admin" element={ <AdminRoute isAdmin={isAdmin}><AdminDashboard /></AdminRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    <ToastContainer />
</div>
  )
}

export default App;