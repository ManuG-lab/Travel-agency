import { Link } from 'react-router-dom';

 function Navbar() {
  return (
    <nav className="bg-purple-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">Travel Agency</Link>
        </div>
        
        <div className="space-x-6">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/my-bookings" className="hover:text-gray-300">My Bookings</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;