import React, { useState } from "react";
import {
  FaArrowLeft,
  FaUpload,
  FaMoneyBillWave,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../../css/Auth.css";

const SeekerRegistration = ({ onComplete, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    experience: "0-2",
    education: "",
    resume: null,
    jobType: "full-time",
    workPreference: "hybrid",
    salaryExpectation: "",
    location: "",
    portfolio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    onComplete();
  };

  return (
    <div className="registration-container">
      <button onClick={onBack} className="back-button">
        <FaArrowLeft /> Back
      </button>

      <h2 className="registration-title">Complete Your Profile</h2>
      <p className="registration-subtitle">
        Help us find the perfect matches for you
      </p>

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-section">
          <h3 className="section-title">Personal Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
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
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Professional Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Skills* (comma separated)</label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="React, Node.js, UX Design"
                required
              />
            </div>

            <div className="form-group">
              <label>Years of Experience*</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <div className="form-group">
              <label>Highest Education</label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Degree and Major"
              />
            </div>

            <div className="form-group">
              <label>Portfolio/GitHub</label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Job Preferences</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Job Type*</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                required
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            <div className="form-group">
              <label>Work Preference*</label>
              <select
                name="workPreference"
                value={formData.workPreference}
                onChange={handleChange}
                required
              >
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="onsite">On-site</option>
              </select>
            </div>

            <div className="form-group">
              <label>Salary Expectations</label>
              <div className="input-with-icon">
                <FaMoneyBillWave className="input-icon" />
                <input
                  type="text"
                  name="salaryExpectation"
                  value={formData.salaryExpectation}
                  onChange={handleChange}
                  placeholder="e.g. Rs 20,000 or Negotiable"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Resume Upload</h3>
          <div className="file-upload-container">
            <label className="file-upload-label">
              <FaUpload className="upload-icon" />
              <span>
                {formData.resume ? formData.resume.name : "Upload Resume (PDF)"}
              </span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="file-upload-input"
              />
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Complete Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default SeekerRegistration;
