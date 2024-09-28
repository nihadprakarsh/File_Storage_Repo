import React, { useState } from "react";
import "./landing.css";
import { useNavigate } from 'react-router-dom';

const Login = ({ onToggle, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    onLogin({ email, password });
  };

  const navigate = useNavigate();

    // const onLoginClick = () => {
    //     navigate('/login');
    // };

    const onSignupClick = () => {
        navigate('/signup');
    };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group password-group">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" className="btn">Login</button>
      </form>
      <div className="toggle-link">
        Don't have an account? <span onClick={onSignupClick}>Sign up here</span>
      </div>
    </div>
  );
};

export default Login;
