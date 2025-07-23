import "../../css/SeekerDashboard.css";

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiEdit,
  FiBriefcase,
  FiMapPin,
  FiDollarSign,
  FiClock,
  FiLogOut,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiJavascript, SiAdobexd } from "react-icons/si";
import "../../css/SeekerDashboard.css";

const SeekerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    education: "",
    resume: null,
    jobType: "",
    workPreference: "",
    salaryExpectation: "",
    portfolio: "",
  });

  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Load profile data from registration
  useEffect(() => {
    if (location.state?.formData) {
      const formData = location.state.formData;
      setProfile({
        name: formData.fullName || "",
        email: formData.email || "",
        skills: formData.skills || "",
        experience: formData.experience || "",
        education: formData.education || "",
        resume: formData.resume || null,
        jobType: formData.jobType || "",
        workPreference: formData.workPreference || "",
        salaryExpectation: formData.salaryExpectation || "",
        portfolio: formData.portfolio || "",
      });
    }

    // Fetch recommended jobs (mock data)
    const fetchJobs = () => {
      const mockJobs = [
        {
          id: 1,
          title: "Frontend Developer (React)",
          company: "TechVision Inc.",
          match: 92,
          location: "Remote",
          type: "Full-time",
          salary: "$95,000 - $120,000",
          posted: "2 days ago",
          skills: "React, JavaScript, HTML/CSS",
          logo: <FaReact className="company-logo react" />,
        },
        {
          id: 2,
          title: "UI/UX Designer",
          company: "DesignHub",
          match: 88,
          location: "New York, NY",
          type: "Full-time",
          salary: "$85,000 - $110,000",
          posted: "1 week ago",
          skills: "Figma, Adobe XD, User Research",
          logo: <FaFigma className="company-logo figma" />,
        },
        {
          id: 3,
          title: "Backend Developer (Node.js)",
          company: "DataSystems",
          match: 85,
          location: "San Francisco",
          type: "Full-time",
          salary: "$100,000 - $140,000",
          posted: "3 days ago",
          skills: "Node.js, MongoDB, AWS",
          logo: <FaNodeJs className="company-logo node" />,
        },
      ];
      setRecommendedJobs(mockJobs);
      setFilteredJobs(mockJobs);
    };

    fetchJobs();
  }, [location.state]);

  // Filter jobs based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredJobs(recommendedJobs);
    } else {
      const filtered = recommendedJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.skills.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  }, [searchQuery, recommendedJobs]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    console.log("Profile saved:", profile);
    setEditMode(false);
  };

  const handleApplyJob = (jobId) => {
    const job = recommendedJobs.find((job) => job.id === jobId);
    navigate("/apply-job", { state: { job } });
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate("/login");
  };

  const getSkillIcon = (skill) => {
    switch (skill.toLowerCase()) {
      case "react":
        return <FaReact className="skill-icon react" />;
      case "javascript":
        return <SiJavascript className="skill-icon js" />;
      case "figma":
        return <FaFigma className="skill-icon figma" />;
      case "adobe xd":
        return <SiAdobexd className="skill-icon xd" />;
      case "node.js":
        return <FaNodeJs className="skill-icon node" />;
      default:
        return null;
    }
  };

  return (
    <div className="seeker-dashboard">
      {/* Header with Profile Section */}
      <header className="dashboard-header">
        <div className="logo-container">
          <h1>Hirelyst</h1>
          <span className="tagline">Find Your Dream Job</span>
        </div>

        <div className="profile-section">
          <div className="profile-info-container">
            <div className="profile-icon">
              {profile.name ? profile.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="profile-name">{profile.name || "User"}</div>
            <button className="logout-btn" onClick={handleLogout}>
              <FiLogOut /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-container">
        {/* Left Side - Profile Details */}
        <aside className="profile-details">
          <h2 className="section-title">
            <FiUser className="section-icon" />
            My Profile
          </h2>

          {editMode ? (
            <div className="edit-profile-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                />
              </div>

              <div className="form-group">
                <label>Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={profile.skills}
                  onChange={handleProfileChange}
                  placeholder="Separate skills with commas"
                />
              </div>

              <div className="form-group">
                <label>Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={profile.experience}
                  onChange={handleProfileChange}
                />
              </div>

              <div className="form-group">
                <label>Education</label>
                <input
                  type="text"
                  name="education"
                  value={profile.education}
                  onChange={handleProfileChange}
                />
              </div>

              <div className="form-actions">
                <button className="save-btn" onClick={handleSaveProfile}>
                  Save Profile
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="profile-info">
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">{profile.email}</span>
              </div>

              <div className="info-item">
                <span className="label">Skills:</span>
                <div className="skills-list">
                  {profile.skills.split(",").map((skill, index) => (
                    <div key={index} className="skill-tag">
                      {getSkillIcon(skill.trim())}
                      <span>{skill.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-item">
                <span className="label">Experience:</span>
                <span className="value">{profile.experience}</span>
              </div>

              <div className="info-item">
                <span className="label">Education:</span>
                <span className="value">{profile.education}</span>
              </div>

              <button className="edit-btn" onClick={() => setEditMode(true)}>
                <FiEdit /> Edit Profile
              </button>
            </div>
          )}
        </aside>

        {/* Main Content - Search and Jobs */}
        <main className="main-content">
          {/* Search Bar */}
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search jobs by title, company, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Recommended Jobs Section */}
          <section className="recommended-jobs">
            <h2 className="section-title">
              <FiBriefcase className="section-icon" />
              Recommended for You
            </h2>
            <p className="match-criteria">
              Based on your skills: <strong>{profile.skills}</strong>
            </p>

            <div className="jobs-list">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div key={job.id} className="job-card">
                    <div className="job-card-header">
                      {job.logo}
                      <div className="job-title-container">
                        <h3>{job.title}</h3>
                        <span className="job-company">{job.company}</span>
                      </div>
                      <span className="match-percentage">
                        {job.match}% Match
                      </span>
                    </div>

                    <div className="job-details">
                      <span>
                        <FiMapPin /> {job.location}
                      </span>
                      <span>
                        <FiBriefcase /> {job.type}
                      </span>
                      <span>
                        <FiDollarSign /> {job.salary}
                      </span>
                      <span>
                        <FiClock /> {job.posted}
                      </span>
                    </div>

                    <div className="job-skills">
                      <strong>Required Skills:</strong>
                      <div className="job-skill-tags">
                        {job.skills.split(",").map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {getSkillIcon(skill.trim())}
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      className="apply-btn"
                      onClick={() => handleApplyJob(job.id)}
                    >
                      Apply Now
                    </button>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <img src="/images/no-jobs.svg" alt="No jobs found" />
                  <p>No jobs found matching your search criteria.</p>
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
