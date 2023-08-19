// importing React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom"; // Correct the import statement
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // components and utilities for client-side routing
import "./style.css";
import CreateUsernamePage from "./CreateUsernamePage";

// serves as the root component of the application
const App = () => {
  return (
    // BrowserRouter used to enable client-side routing
    <BrowserRouter>
      {/* Defined different routes useing the Route component*/}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createUsername" element={<CreateUsernamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

// Render the app component using ReactDOM.render
ReactDOM.render(<App />, document.getElementById("root"));

/*
  Code sets up routing for React application using 'react-router-dom'
  Defines routs to differnt links and associates each route with a specific component to render
*/
