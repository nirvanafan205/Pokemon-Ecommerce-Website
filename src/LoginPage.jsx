import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./style.css";

const LoginPage = ({ setLoggedInUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        name,
        password,
      });

      if (response.data === "Success") {
        setLoggedInUser(name);
        navigate("/pokeShop"); // Update the route path to lowercase "pokeShop"
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("An error occurred while logging in.");
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <div className="navBar">
        <Link to="/" className="home-button">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>

      {/* Login Form */}
      <div className="login-form">
        <div className="color">
          <h1 className="LoginPost">Login Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
              <p>User Name</p>
              <input
                className="input"
                type="text"
                name="user"
                placeholder="User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <p>Password</p>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="error-message">
              {errorMessage && <p className="error-text">{errorMessage}</p>}
            </div>

            <div className="wrapper">
              <button className="loginButton" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
