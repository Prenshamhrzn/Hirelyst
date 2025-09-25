import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaBriefcase, FaUserShield } from "react-icons/fa";
import "../../css/Auth.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSelect = (type) => {
    if (type === "seeker") navigate("/register/seeker");
    if (type === "provider") navigate("/register/provider-registration");
    if (type === "admin") navigate("/admin-login");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-glass-container">
        <div className="auth-header">
          <h2>
            Join <span className="green-text">Hirelyst</span>
          </h2>
          <p>Select your role to continue</p>
        </div>

        <div className="role-selection">
          <button
            className="auth-button"
            onClick={() => handleSelect("seeker")}
          >
            <FaUser /> Job Seeker
          </button>
          <button
            className="auth-button"
            onClick={() => handleSelect("provider")}
          >
            <FaBriefcase /> Employer
          </button>
          <button className="auth-button" onClick={() => handleSelect("admin")}>
            <FaUserShield /> Admin
          </button>
        </div>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <span className="green-link" onClick={() => navigate("/loginPage")}>
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
