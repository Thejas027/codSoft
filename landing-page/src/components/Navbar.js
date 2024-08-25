import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="nav-logo border">
          <div className="logo"></div>
        </div>
        <div className="nav-address border">
          <p className="add-first">Deliver to</p>
          <div className="add-icon">
            <i className="fa-solid fa-location-dot"></i>
            <p className="add-sec">India</p>
          </div>
        </div>
        <div className="nav-search">
          <select className="search-select">
            <option>All</option>
          </select>
          <input placeholder="Search Amazon" className="search-input" />
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="nav-sigin border">
          <p>
            <span>Hello, sign in</span>
          </p>
          <p className="nav-sec">Account & Lists</p>
        </div>
        <div className="nav-return border">
          <p>
            <span>Returns</span>
          </p>
          <p className="nav-sec">& Orders</p>
        </div>
        <div className="nav-cart border">
          <i className="fa-solid fa-cart-shopping"></i> Cart
        </div>
      </div>
    </header>
  );
};

export default Navbar;
