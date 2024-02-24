// Import necessary modules and components
import "../Styles/Registration.css"; // Import CSS file for styling
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import { useSelector } from "react-redux"; // Import useSelector hook from react-redux

// Define PageSecond component
function PageSecond() {
  // Extract form data from Redux store
  const formData = useSelector((state) => state.add.formData);

  return (
    <div className="App-main">
      {" "}
      {/* Main container */}
      <div
        className="" // Add additional classNames for styling
        style={{
          width: "60%", // Set width
          height: "400px", // Set height
          backgroundColor: "ActiveBorder", // Set background color
          border: "1px solid black", // Set border
        }}
      >
        {/* Return Home link */}
        <div className="text-btn">
          {" "}
          {/* Container for link */}
          <Link
            to={"/"} // Link to home page
            style={{
              textDecoration: "none", // Remove underline
              fontSize: "22px", // Set font size
              fontWeight: "bold", // Set font weight
              color: "blue", // Set text color
            }}
          >
            Return Home {/* Text for link */}
          </Link>
        </div>

        {/* Display email */}
        <div className="first-input-value">
          {" "}
          {/* Container for email */}
          <h3
            style={{
              color: "black", // Set text color
              fontSize: "22px", // Set font size
              fontFamily: "inherit", // Inherit font family

              textAlign: "center", // Center-align text
              fontWeight: "bold", // Set font weight
            }}
          >
            <h4
              style={{ color: "wheat", fontSize: "20px", fontWeight: "bold" }}
            >
              Email {/* Email label */}
            </h4>
            {formData.email} {/* Display email value */}
          </h3>
        </div>

        {/* Display password */}
        <div className="first-input-value">
          {" "}
          {/* Container for password */}
          <h3
            style={{
              color: "black", // Set text color
              fontSize: "22px", // Set font size
              fontFamily: "inherit", // Inherit font family

              textAlign: "center", // Center-align text
              fontWeight: "bold", // Set font weight
            }}
          >
            <h4
              style={{ color: "wheat", fontSize: "20px", fontWeight: "bold" }}
            >
              Password {/* Password label */}
            </h4>
            {formData.encryptedPassword} {/* Display password value */}
          </h3>
        </div>

        {/* Display username */}
        <div className="first-input-value">
          {" "}
          {/* Container for username */}
          <h3
            style={{
              color: "black", // Set text color
              fontSize: "22px", // Set font size
              fontFamily: "inherit", // Inherit font family

              textAlign: "center", // Center-align text
              fontWeight: "bold", // Set font weight
            }}
          >
            <h4
              style={{ color: "wheat", fontSize: "20px", fontWeight: "bold" }}
            >
              UserName {/* Username label */}
            </h4>
            {formData.username} {/* Display username value */}
          </h3>
        </div>

        {/* Display person type */}
        <div className="first-input-value">
          {" "}
          {/* Container for person type */}
          <h3
            style={{
              color: "black", // Set text color
              fontSize: "22px", // Set font size
              fontFamily: "inherit", // Inherit font family

              textAlign: "center", // Center-align text
              fontWeight: "bold", // Set font weight
            }}
          >
            <h4
              style={{ color: "wheat", fontSize: "20px", fontWeight: "bold" }}
            >
              Person type {/* Person type label */}
            </h4>
            {formData.personType} {/* Display person type value */}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PageSecond; // Export PageSecond component
