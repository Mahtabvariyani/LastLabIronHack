import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="nav-link text-xl font-bold">
          Home
        </Link>
 

        <Link to="/phones" className="nav-link">
          Phone
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}
