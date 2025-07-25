import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaBriefcase, FaUserShield } from "react-icons/fa";
import "../../css/Auth.css";
import SeekerRegistration from "./SeekerRegistration";
import ProviderRegistration from "./ProviderRegistration";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    userType: "seeker",
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      setError("Please fill all fields");
      return;
    }

    // Simulate API call
    try {
      if (credentials.userType === "admin") {
        navigate("/admin-dashboard");
      } else {
        setIsRegistering(true);
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-glass-container">
        {!isRegistering ? (
          <>
            <div className="auth-header">
              <h2>
                Welcome to <span className="brand-gradient">Hirelyst</span>
              </h2>
              <p>Find your dream job or ideal candidate</p>
            </div>

            <form onSubmit={handleLogin} className="auth-form">
              <div className="input-group">
                <div className="input-icon">
                  {credentials.userType === "seeker" ? (
                    <FaUser />
                  ) : credentials.userType === "provider" ? (
                    <FaBriefcase />
                  ) : (
                    <FaUserShield />
                  )}
                </div>
                <select
                  name="userType"
                  value={credentials.userType}
                  onChange={handleChange}
                  className="auth-select"
                >
                  <option value="seeker">Job Seeker</option>
                  <option value="provider">Employer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username or Email"
                  value={credentials.username}
                  onChange={handleChange}
                  className="auth-input"
                />
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <FaLock />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="auth-input"
                />
              </div>

              {error && <div className="auth-error">{error}</div>}

              <button type="submit" className="auth-button primary">
                {credentials.userType === "admin" ? "Login" : "Continue"}
              </button>

              <div className="auth-footer">
                <p>
                  New to Hirelyst? <span className="text-link">Learn more</span>
                </p>
              </div>
            </form>
          </>
        ) : credentials.userType === "seeker" ? (
          <SeekerRegistration
            onComplete={() => navigate("/seeker-dashboard")}
            onBack={() => setIsRegistering(false)}
          />
        ) : (
         <ProviderRegistration
            onComplete={() => navigate("/employer-dashboard")}
            onBack={() => setIsRegistering(false)}
          />
        )}
      </div>
    </div>
  );
};
export default LoginPage;