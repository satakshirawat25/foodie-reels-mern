import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import axios from "axios";

const FoodPartnerLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const email = e.target.email.value;

    const response = await axios.post(
      "http://localhost:3000/api/auth/food-partner/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    console.log(response.data);
    navigate("/create-food");
  };
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1 className="auth-title">Partner Login</h1>
          <p className="auth-subtitle">Manage your food business</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your business email"
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
              placeholder="Enter your password"
            />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="remember" className="form-checkbox" />
            <label htmlFor="remember" className="checkbox-label">
              Remember me
            </label>
          </div>

          <Link
            to="#"
            style={{
              textAlign: "right",
              fontSize: "var(--font-size-sm)",
              color: "var(--primary-color)",
              textDecoration: "none",
              fontWeight: "var(--font-weight-medium)",
              transition: "color var(--transition-fast)",
            }}
          >
            Forgot password?
          </Link>

          <button type="submit" className="auth-button auth-button-primary">
            Sign In
          </button>
        </form>

        <div className="auth-divider">or</div>

        <div style={{ display: "flex", gap: "var(--spacing-md)" }}>
          <button type="button" className="auth-button auth-button-secondary">
            Google
          </button>
          <button type="button" className="auth-button auth-button-secondary">
            GitHub
          </button>
        </div>

        <div className="auth-footer">
          Not registered yet?{" "}
          <Link to="/food-partner/register">Register your business</Link>
        </div>

        <div className="auth-switcher">
          <div className="auth-switcher-label">
            Are you a regular user?{" "}
            <Link to="/user/login" className="auth-switcher-link">
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
