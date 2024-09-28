// Signup.js
import React, { useState } from "react";
import "./landing.css"
import { useNavigate } from 'react-router-dom';


const Signup = ({ onToggle, onSignup }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    role: "USER",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateContactNumber = (number) => {
    const contactNumberRegex = /^\d{10}$/;
    return contactNumberRegex.test(number);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.contactNumber) {
      setError("All fields are required for signup");
      return;
    }

    if (!validateContactNumber(formData.contactNumber)) {
      setError("Enter a valid phone number");
      return;
    }

    onSignup(formData);
  };

  const navigate = useNavigate();

    const onLoginClick = () => {
        navigate('/login');
    };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignupSubmit}>
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            pattern="\d{10}"
            title="Enter a valid phone number"
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" className="btn">Signup</button>
      </form>
      <div className="toggle-link">
        Already have an account? <span onClick={onLoginClick}>Login here</span>
      </div>
    </div>
  );
};

export default Signup;
