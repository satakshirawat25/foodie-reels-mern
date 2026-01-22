import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import axios from "axios";

const UserRegister = () => {
  const navigate = useNavigate();

  const handleSubmt = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(fullName)

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/user/register",
        {
          fullName,
          email,
          password,
        },{
            withCredentials:true
        }
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join us to explore delicious recipes</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmt}>
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              FullName
            </label>
            <input
              type="text"
              id="fullname"
              name="fullName"
              className="form-input"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Create a strong password"
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              className="form-input"
              placeholder="Confirm your password"
            />
          </div> */}

          <div className="checkbox-group">
            <input type="checkbox" id="terms" className="form-checkbox" />
            <label htmlFor="terms" className="checkbox-label">
              I agree to the <Link to="#">Terms of Service</Link> and{" "}
              <Link to="#">Privacy Policy</Link>
            </label>
          </div>

          <button type="submit" className="auth-button auth-button-primary">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/user/login">Sign in</Link>
        </div>

        <div className="auth-switcher">
          <div className="auth-switcher-label">
            Are you a food partner?{" "}
            <Link to="/food-partner/register" className="auth-switcher-link">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
