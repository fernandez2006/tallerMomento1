import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
            <img src="logo.png" alt="" />
          </a>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Computer</a>
          <a href="/">Laptop</a>
          <a href="/">Products</a>
          <a href="/">Contact Us</a>
          <a href="/">
            <img className="search" src="search.png" alt="" />
          </a>
          <a href="/">Login</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
