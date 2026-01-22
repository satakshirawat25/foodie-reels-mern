import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const UserLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="remember"
              className="form-checkbox"
            />
            <label htmlFor="remember" className="checkbox-label">
              Remember me
            </label>
          </div>

          <Link to="#" style={{
            textAlign: 'right',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--primary-color)',
            textDecoration: 'none',
            fontWeight: 'var(--font-weight-medium)',
            transition: 'color var(--transition-fast)'
          }}>
            Forgot password?
          </Link>

          <button type="submit" className="auth-button auth-button-primary">
            Sign In
          </button>
        </form>

        <div className="auth-divider">or</div>

        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
          <button type="button" className="auth-button auth-button-secondary">
            Google
          </button>
          <button type="button" className="auth-button auth-button-secondary">
            GitHub
          </button>
        </div>

        <div className="auth-footer">
          Don't have an account? <Link to="/user/register">Sign up</Link>
        </div>

        <div className="auth-switcher">
          <div className="auth-switcher-label">
            Are you a food partner?{' '}
            <Link to="/food-partner/login" className="auth-switcher-link">
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
