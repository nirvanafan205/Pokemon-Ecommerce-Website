import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faHouse } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const PokeShop = ({ loggedInUser, setLoggedInUser }) => {
  const handleLogout = () => {
    setLoggedInUser(""); // Log out by setting the loggedInUser to an empty string
  };

  return (
    <div>
      {/* Navigation Bar */}
      <div className="navBar">
        <Link to="/" className="home-button">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <button onClick={handleLogout} className="logout-button">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>

      {/* Content */}
      <div className="poke-shop-content">
        <h1>Welcome to the PokeShop, {loggedInUser}!</h1>
        {/* Rest of your PokeShop content */}
      </div>
    </div>
  );
};

export default PokeShop;
