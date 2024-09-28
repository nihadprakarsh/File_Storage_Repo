import React, { useState } from "react";
import "./landing.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    role: "USER",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContactNumber = (number) => {
    const contactNumberRegex = /^\d{10}$/;
    return contactNumberRegex.test(number);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Invalid email format");
      return;
    }

    if (isLogin) {
      console.log("Login with", formData);
    } else {
      if (!formData.firstName || !formData.lastName || !formData.contactNumber) {
        setError("All fields are required for signup");
        return;
      }

      if (!validateContactNumber(formData.contactNumber)) {
        setError("Enter a valid phone number");
        return;
      }

      console.log("Sign up with", formData);
      alert("Registration successful! Redirecting to login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>{isLogin ? "Login" : "Signup"}</h1>

        <form onSubmit={handleFormSubmit}>
          {!isLogin && (
            <>
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
            </>
          )}

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

          <div className="input-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>

          {error && <div className="error">{error}</div>}

          <button type="submit" className="btn">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <div className="toggle-link">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm}>
            {isLogin ? "Sign up here" : "Login here"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;