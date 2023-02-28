import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo_rice.gif";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handelToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Rice" />
          </Link>
          <p>Classroom Technology</p>
          <button type="button" className="nav-btn" onClick={handelToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Find Rooms by Building</Link>
          </li>
          <li>
            <Link to="/rooms">Search for a Room</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
