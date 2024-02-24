// Import necessary modules and components
import { useState } from "react"; // Import useState hook from React
import { validateEmail } from "./Utils"; // Import email validation function
import "../Styles/Registration.css"; // Import CSS file for styling
import axios from "axios"; // Import axios for making HTTP requests
import { ToastContainer, toast } from "react-toastify"; // Import toast notification components
import { Link, useNavigate } from "react-router-dom"; // Import Link component and useNavigate hook from react-router-dom
import { useDispatch } from "react-redux"; // Import useDispatch hook from react-redux
import { storeFormData } from "../Redux/Action"; // Import action creator for storing form data

// Component for displaying password error message
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

// Define PageFirst component
function PageFirst() {
  const navigate = useNavigate(); // Get navigation function from useNavigate hook
  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState(""); // State for email
  const [encryptedPassword, setEncryptedPassword] = useState(""); // State for encrypted password
  const [personType, setPersonType] = useState("role"); // State for person type (role)

  const [padBlur, setPadBlur] = useState(false); // State to track password input blur

  // Function to check if form is valid
  const getIsFormValid = () => {
    return (
      username &&
      validateEmail(email) &&
      encryptedPassword.length >= 4 &&
      personType !== "role"
    );
  };

  const dispatch = useDispatch(); // Get dispatch function from useDispatch hook

  // Function to clear form fields
  const clearForm = () => {
    setUsername("");
    setEmail("");
    setEncryptedPassword("");
    setPersonType("role");
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(storeFormData({ email, username, encryptedPassword, personType }));

    setPadBlur(false);
    clearForm();
  };

  return (
    <div className="App-main">
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Form for user registration */}
        <fieldset>
          <h2>Sign Up</h2>
          {/* Username input */}
          <div className="Field">
            <label>
              User name <sup>*</sup>
            </label>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="First name"
            />
          </div>

          {/* Email input */}
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </div>

          {/* Password input */}
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              value={encryptedPassword}
              type="password"
              onChange={(e) => {
                setEncryptedPassword(e.target.value);
              }}
              onBlur={() => {
                setPadBlur(true);
              }}
              placeholder="Password"
            />
            {/* Display password error message if password length is less than 8 */}
            {padBlur && encryptedPassword.length < 4 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          {/* Role select */}
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={personType}
              onChange={(e) => setPersonType(e.target.value)}
            >
              <option value="">Select Below</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Form submission and sign-in link */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {/* Submit button */}
              <button type="submit" disabled={!getIsFormValid()}>
                Create account
              </button>
            </div>
            <div>
              {/* Link to sign-in page */}
              <Link
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
                to="/signin"
              >
                Show Result
              </Link>
            </div>
          </div>
        </fieldset>
      </form>
      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </div>
  );
}

export default PageFirst; // Export PageFirst component
