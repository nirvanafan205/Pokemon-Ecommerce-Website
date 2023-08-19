import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="intro">
      <h1>Let's get ready to catch them all</h1>
      <h2>
        Are you a new or returning trainer?
      </h2>

      <div className="buttonContainer">
        <Link to="/login" className="button">
          <FontAwesomeIcon icon={faUser} /> Login
        </Link>

        <Link to="/createUsername" className="button">
          Create Account <FontAwesomeIcon icon={faUserPlus} />
        </Link>
      </div>
      <div className="gradient"></div>


      <section id="about">
        <h2>Welcome PokeBros!!!</h2>
        <p className="intro">
          Are you disappointed with Evolving Lies? Perhaps scalpers are still on the rise with Japanese cards.
          Well, you found the right place for your place to fuel your pokediction!
          Here at Njoy Games we may be able to help you with decent priced singles and your next fix for
          poke-needs! Give us a try and check what we have to offer you to...
          <p id="Moto">Catch 'Em all!</p>
        </p>
        <div className="gallery">
          <img src="books.jpg" alt="Inside store" id="store" />
          <img src="store.jpg" alt="store" id="store" />
        </div>
        <div className="location">
          <ul>
            <li>
              <h4>Let's get poke-rich!</h4>
            </li>
            <li>+1-818-709-0599</li>
            <li>service@njoy.us</li>
            <li>
              <a
                href="https://www.google.com/maps/dir/34.230723,-118.4513566/Njoy+Games+%26+Comics/@34.231929,-118.5289172,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80c29bb460760dd5:0x5aa5b227cefd5e53!2m2!1d-118.5358135!2d34.2314159"
                target="_blank"
                rel="noopener noreferrer"
              >
                8820 Reseda Blvd Northridge CA 91324
              </a>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
