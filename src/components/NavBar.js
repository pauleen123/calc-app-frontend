import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/puns">Puns</Link>
    </nav>
  );
}
