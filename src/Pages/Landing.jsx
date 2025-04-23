import React from "react";

 function Landing() {
    return (
        <div>
        
        <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center p-6"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=600')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-xl shadow-lg max-w-xl">
          <h1 className="text-5xl font-bold mb-6">🌍 Explore the World with Us</h1>
          <p className="text-xl mb-10">Book unforgettable trips with our trusted travel agency.</p>
            <a href="/about" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition duration-300">About Us</a>
            <a href="/contact" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition duration-300 ml-4">Contact Us</a>
          </div>
      </div>
 </div>  
 );
 }

export default Landing;