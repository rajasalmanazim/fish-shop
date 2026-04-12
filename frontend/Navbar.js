// frontend/src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // for navigation

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" /> {/* small logo */}
        <h1 className="text-2xl font-bold">Fish Shop</h1>
      </div>

      <div className="space-x-4">
        <Link to="/" className="hover:underline">Products</Link>
        <Link to="/orders" className="hover:underline">Orders</Link>
        <Link to="/customers" className="hover:underline">Customers</Link>
      </div>
    </nav>
  );
}

export default Navbar;