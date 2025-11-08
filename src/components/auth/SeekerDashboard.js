import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiBriefcase,
  FiMapPin,
  FiDollarSign,
  FiClock,
  FiUser,
  FiLogOut,
  FiEdit,
  FiSave,
  FiX,
  FiMenu,
  FiCalendar,
} from "react-icons/fi";
import "../../css/SeekerDashboard.css";
import axios from "axios";

const SeekerDashboard = ({ jobsData = [] }) => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    education: "",
  });
  const [tempProfile, setTempProfile] = useState(profile);

  // Fetch seeker profile from backend or localStorage
  const fetchSeekerProfile = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("seekerUser"));

      if (storedUser && storedUser._id) {
        const res = await axios.get(
          `http://192.168.1.43:5000/api/seekers/${storedUser._id}`
        );
        setProfile(res.data);
        setTempProfile(res.data);
      } else {
        console.log("No user logged in, using guest profile");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  // Fetch all jobs
  const fetchAllJobs = async () => {
    try {
      const res = await axios.get("http://192.168.1.28:5000/api/jobs/getJobs");
      setJobs(res.data);
      setFilteredJobs(res.data);
    } catch (error) {
      console.log("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchSeekerProfile();
    fetchAllJobs();
  }, []);

  // Search filter logic
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredJobs(jobs);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.category.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query) ||
          job.qualifications.some((qual) => qual.toLowerCase().includes(query))
      );
      setFilteredJobs(filtered);
    }
  }, [searchQuery, jobs]);

  // Utility functions
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const getDaysUntilExpiry = (dateString) => {
    const today = new Date();
    const expiryDate = new Date(dateString);
    const diff = expiryDate - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const formatSalary = (salary) => {
    const num = parseInt(salary);
    if (num >= 100000) return `$${(num / 1000).toFixed(0)}k`;
    return `$${num.toLocaleString()}`;
  };

  const handleProfileUpdate = async () => {
    try {
      await axios.put(
        `http://192.168.1.43:5000/api/seekers/update/${profile._id}`,
        tempProfile
      );
      setProfile(tempProfile);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancelEdit = () => {
    setTempProfile(profile);
    setEditMode(false);
  };

  const handleApplyJob = (jobId) => {
    alert(`Applied to job: ${jobId}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("seekerUser");
    window.location.href = "/login";
  };

  return (
    <div className="seeker-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo-container">
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FiMenu />
          </button>
          <h1>JobSeeker</h1>
          <p className="tagline">Find your dream job</p>
        </div>

        <div className="profile-section">
          <div className="profile-info">
            <span className="profile-name">{profile.name || "Guest User"}</span>
            <span className="profile-email">
              {profile.email || "guest@email.com"}
            </span>
          </div>
          <div className="profile-icon">
            <FiUser />
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <FiLogOut /> Logout
          </button>
        </div>
      </header>

      <div className="dashboard-container">
        {sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
          <button
            className="sidebar-close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>

          <div className="profile-section-sidebar">
            <div className="profile-header">
              <FiUser className="profile-icon-large" />
              <h3>Your Profile</h3>
            </div>

            {editMode ? (
              <div className="profile-edit-form">
                {["name", "email", "skills", "experience", "education"].map(
                  (field) => (
                    <div className="form-group" key={field}>
                      <label>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type="text"
                        value={tempProfile[field] || ""}
                        onChange={(e) =>
                          setTempProfile({
                            ...tempProfile,
                            [field]: e.target.value,
                          })
                        }
                      />
                    </div>
                  )
                )}
                <div className="form-buttons">
                  <button onClick={handleProfileUpdate} className="save-btn">
                    <FiSave /> Save
                  </button>
                  <button onClick={handleCancelEdit} className="cancel-btn">
                    <FiX /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="profile-display">
                <div className="profile-item">
                  <span className="label">Name:</span>
                  <span className="value">{profile.name || "Not set"}</span>
                </div>
                <div className="profile-item">
                  <span className="label">Email:</span>
                  <span className="value">{profile.email || "Not set"}</span>
                </div>
                <div className="profile-item">
                  <span className="label">Skills:</span>
                  <div className="skills-display">
                    {profile.skills ? (
                      profile.skills.split(",").map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill.trim()}
                        </span>
                      ))
                    ) : (
                      <span className="no-data">No skills added</span>
                    )}
                  </div>
                </div>
                <div className="profile-item">
                  <span className="label">Experience:</span>
                  <span className="value">
                    {profile.experience || "Not set"}
                  </span>
                </div>
                <div className="profile-item">
                  <span className="label">Education:</span>
                  <span className="value">
                    {profile.education || "Not set"}
                  </span>
                </div>
                <button
                  onClick={() => setEditMode(true)}
                  className="edit-profile-btn"
                >
                  <FiEdit /> Edit Profile
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="search-section">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search jobs by title, category, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <section className="jobs-section">
            <div className="section-header">
              <h2>
                <FiBriefcase className="section-icon" />
                Available Jobs
              </h2>
              <p className="jobs-count">
                {filteredJobs.length}{" "}
                {filteredJobs.length === 1 ? "job" : "jobs"} found
              </p>
            </div>

            <div className="jobs-list">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div key={job._id} className="job-card">
                    <div className="job-header">
                      <h4 className="job-title">{job.title}</h4>
                      <span className="job-category">{job.category}</span>
                    </div>
                    <div className="job-details">
                      <div className="detail-item">
                        <FiMapPin className="detail-icon" />
                        <span>{job.location}</span>
                      </div>
                      <div className="detail-item">
                        <FiDollarSign className="detail-icon" />
                        <span>{formatSalary(job.salary)}</span>
                      </div>
                      <div className="detail-item">
                        <FiCalendar className="detail-icon" />
                        <span>Expires: {formatDate(job.expiry_date)}</span>
                      </div>
                      <div className="detail-item">
                        <FiClock className="detail-icon" />
                        <span>Posted: {formatDate(job.createdAt)}</span>
                      </div>
                    </div>

                    <div className="qualifications">
                      {job.qualifications?.length > 0 && (
                        <>
                          <strong>Required Qualifications:</strong>
                          <div className="qualifications-list">
                            {job.qualifications.map((qual, index) => (
                              <span key={index} className="qualification-tag">
                                {qual}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="job-status">
                      {getDaysUntilExpiry(job.expiry_date) > 0 ? (
                        <span
                          className={`status-badge ${
                            getDaysUntilExpiry(job.expiry_date) <= 7
                              ? "urgent"
                              : "active"
                          }`}
                        >
                          {getDaysUntilExpiry(job.expiry_date)} days left
                        </span>
                      ) : (
                        <span className="status-badge expired">Expired</span>
                      )}
                    </div>

                    <button
                      className={`apply-btn ${
                        getDaysUntilExpiry(job.expiry_date) <= 0
                          ? "disabled"
                          : ""
                      }`}
                      onClick={() => handleApplyJob(job._id)}
                      disabled={getDaysUntilExpiry(job.expiry_date) <= 0}
                    >
                      {getDaysUntilExpiry(job.expiry_date) > 0
                        ? "Apply Now"
                        : "Job Expired"}
                    </button>
                  </div>
                ))
              ) : (
                <div className="no-jobs">
                  <FiBriefcase className="no-jobs-icon" />
                  <h3>No jobs found</h3>
                  <p>
                    {searchQuery
                      ? "Try adjusting your search criteria"
                      : "No job listings available right now"}
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SeekerDashboard;
