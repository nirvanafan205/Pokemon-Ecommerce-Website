import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import PokeShop from "./PokeShop";
import "./style.css";
import CreateUsernamePage from "./CreateUsernamePage";

const App = () => {
  // state to track the logged-in user
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          }
        />

        <Route
          path="/login"
          element={<LoginPage setLoggedInUser={setLoggedInUser} />}
        />
        <Route path="/createUsername" element={<CreateUsernamePage />} />

        <Route
          path="/pokeShop"
          element={
            <PokeShop
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
