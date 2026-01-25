import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import axios from "axios";

const FoodPartnerRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const businessName = e.target.businessName.value;
    const contactName = e.target.contactName.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/food-partner/register",
        {
          name: businessName,
          contactName,
          phone,
          email,
          password,
          address,
        },
        { withCredentials: true }
      );
      console.log(response.data);
      navigate("/create-food");
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
          <h1 className="auth-title">Partner With Us</h1>
          <p className="auth-subtitle">
            Register your restaurant or food business
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="business-name" className="form-label">
              Business Name
            </label>
            <input
              type="text"
              id="business-name"
              name="businessName"
              className="form-input"
              placeholder="Enter your restaurant name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">
              Contact Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="contactName"
              className="form-input"
              placeholder="Enter contact person's name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="Enter phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter business email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-input"
              placeholder="Enter business address"
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

          <button type="submit" className="auth-button auth-button-primary">
            Register Business
          </button>
        </form>

        <div className="auth-footer">
          Already registered? <Link to="/food-partner/login">Sign in</Link>
        </div>

        <div className="auth-switcher">
          <div className="auth-switcher-label">
            Are you a regular user?{" "}
            <Link to="/user/register" className="auth-switcher-link">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
