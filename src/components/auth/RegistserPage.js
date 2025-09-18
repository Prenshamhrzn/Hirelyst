import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaBriefcase, FaUserShield } from "react-icons/fa";
import "../../css/Auth.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSelect = (userType) => {
    if (userType === "seeker") {
      navigate("/register/seeker");
    } else if (userType === "provider") {
      navigate("/register/provider-registration");
    } else if (userType === "admin") {
      navigate("/admin-login");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-glass-container">
        <div className="auth-header">
          <h2>
            Join <span className="brand-gradient">Hirelyst</span>
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
            <span className="text-link" onClick={() => navigate("/loginPage")}>
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
