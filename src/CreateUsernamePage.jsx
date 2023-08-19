import React from 'react';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import './style.css';

const CreateUsernamePage = () => {

	// state variables are made
	// useSate is managing: name, password, isButtonDisabled, and errorMessage
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	// validation function checks if the input usernames meets criteria
	// criteria is must only contains lower case letters and atleast three numbers
	const validateInput = (input) => {
		const lowercaseInput = input.toLowerCase();
		const numCount = (lowercaseInput.match(/\d/g) || []).length;
		return lowercaseInput === input && numCount >= 3;
	};

	// input change event handler 
	// updates state varaibles base on the input value and validation status
	// manages error message
	const handleInputChange = (e) => {

		// gets current value of the input field triggered the event
		// e is passed as an argument to the event handler
		const inputValue = e.target.value; // refers to HTML element triggered the event and value retrieves current value of the input field

		// stat is kept in sync w/ input value 
		// allows React to manage the input field's value
		setName(inputValue); // updates name state variable w/ current value of input field

		// updates isButtonDisables state variable[
		// validateInput function returns true if input meets criteria
		// false otherwise
		// ! is used to negate result so isButtonDisables becomes true when
		// valid and false when not
		setIsButtonDisabled(!validateInput(inputValue));

		// checks for empty input
		// checks if the input value is empty or consists only of whitespace chars after trimming
		if (inputValue.trim() === "") {
			setErrorMessage(""); // Clear error message when input is empty
		} else if (!validateInput(inputValue)) {
			// if the value is not empty and doesn't meet the validation criteria
			// condition is triggered 
			// error message is set to show the specific validation requirement for the username
			setErrorMessage(
				"Username must be all lowercase with at least three numbers."
			);
		} else {
			// if the input value is not empty
			// meet the validation criteria
			// block is executed
			// error message is cleared
			setErrorMessage("");
		}
	};

	// 
	const handleSubmit = (e) => {
		// prevents default behavior of for submission
		// it would cause the page to relod
		// since using React and client-side routing, 
		// we will handle form submission w/o full page refresh
		e.preventDefault();

		// sends POST request to server running locally on port 3001
		// sends data in the format { name, password } to the server
		// name and password values come from the state variables in the component
		axios
			.post("http://localhost:3001/register", { name, password })
			// if POST request is successful
			// .then callback function is executed
			// result parameter contains response from the server
			.then((result) => {
				console.log(result);
				// uses navigate function to navigate the user to "/login" route
				navigate("/login");
			})
			// if there's an error during the POST request
			// .catch callback function is executed
			// err parameter contains error info
			// logs it to the console
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<div className="stars"></div>
			<div className="twinkling"></div>
			<div className="clouds"></div>

			<div className="loginForm">

				<form onSubmit={handleSubmit}>
					<h1>Welcome</h1>

					<div className="input-container">
						<input
							type="text"
							placeholder="User Name"
							autoComplete='off'
							id="userName"
							name="username"
							value={name}
							onChange={handleInputChange}
						/>
					</div>

					<div className="input-container">
						<input
							type="password"
							placeholder='Password'
							id="passWord"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<button type='submit' disabled={isButtonDisabled}>
						Register
					</button>

					<Link to="/" className="home-link">
						<FontAwesomeIcon icon={faHouse} />
					</Link>


				</form>
			</div>

		</div>
	);
}

export default CreateUsernamePage;
