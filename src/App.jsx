import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Landing from "./Pages/Landing";
import Navbar from "./Components/NavBar";
import Home from "./Pages/Home";
import Bookings from "./Pages/Bookings";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App(){
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-bookings" element={<Bookings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;