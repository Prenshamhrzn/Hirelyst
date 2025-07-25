import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Auth.css";

const ProviderRegistration = () => {
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName)
      newErrors.companyName = "Company name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.contactPerson)
      newErrors.contactPerson = "Contact person is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit to backend
      console.log("Provider registration data:", formData);
      navigate("/provider-dashboard");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Company Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Company Name*</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={errors.companyName ? "error" : ""}
            />
            {errors.companyName && (
              <span className="error-message">{errors.companyName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label>Contact Person*</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className={errors.contactPerson ? "error" : ""}
            />
            {errors.contactPerson && (
              <span className="error-message">{errors.contactPerson}</span>
            )}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Industry*</label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
              >
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
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
              >
                <option value="">Select Size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501+">501+ employees</option>
              </select>
            </div>
          </div>

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

          <div className="form-row">
            <div className="form-group">
              <label>Password*</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
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

          <div className="form-footer">
            <button type="submit" className="btn-primary">
              Register Company
            </button>
            <p className="login-link">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProviderRegistration;
