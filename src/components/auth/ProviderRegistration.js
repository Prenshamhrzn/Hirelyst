import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Auth.css";

const ProviderRegistration = ({ onComplete, onBack }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    contactPerson: "",
    phone: "",
    industry: "",
    companySize: "",
    website: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName) newErrors.companyName = "Company name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.contactPerson) newErrors.contactPerson = "Contact person is required";
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) {
    return; // Stop submission if validation fails
  }

  try {
    const response = await fetch("http://localhost:5000/api/employers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      console.log("Registration successful. Navigating to dashboard...");
      navigate("/employer-dashboard");
    } else {
      console.error("Registration failed:", data.message);
      alert(data.message || "Registration failed.");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Server error. Please try again later.");
  }
};


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Company Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="form-group">
            <label>Company Name*</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={errors.companyName ? "error" : ""}
            />
            {errors.companyName && <span className="error-message">{errors.companyName}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Contact Person */}
          <div className="form-group">
            <label>Contact Person*</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className={errors.contactPerson ? "error" : ""}
            />
            {errors.contactPerson && <span className="error-message">{errors.contactPerson}</span>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          {/* Industry & Company Size */}
          <div className="form-row">
            <div className="form-group">
              <label>Industry*</label>
              <select name="industry" value={formData.industry} onChange={handleChange}>
                <option value="">Select Industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Company Size*</label>
              <select name="companySize" value={formData.companySize} onChange={handleChange}>
                <option value="">Select Size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501+">501+ employees</option>
              </select>
            </div>
          </div>

          {/* Website */}
          <div className="form-group">
            <label>Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
            />
          </div>

          {/* Passwords */}
          <div className="form-row">
            <div className="form-group">
              <label>Password*</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label>Confirm Password*</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "error" : ""}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          </div>

          {serverError && <div className="auth-error">{serverError}</div>}

          <div className="form-footer">
            <button type="submit" className="btn-primary">
              Register Company
            </button>
            <p className="login-link">
              Already have an account?{" "}
              <span onClick={onBack || (() => navigate("/loginPage"))}>Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProviderRegistration;
