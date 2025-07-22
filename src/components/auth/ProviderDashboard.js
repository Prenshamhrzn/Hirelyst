import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ProviderDashboard.css";

const ProviderDashboard = () => {
  const [profile, setProfile] = useState({
    companyName: "Tech Innovations",
    email: "contact@techinnovations.com",
    contactPerson: "Jane Smith",
    industry: "Information Technology",
    companySize: "51-200 employees",
  });
  const [vacancies, setVacancies] = useState([]);
  const [newVacancy, setNewVacancy] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    type: "Full-time",
    salary: "",
  });
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleVacancyChange = (e) => {
    const { name, value } = e.target;
    setNewVacancy((prev) => ({ ...prev, [name]: value }));
  };

  const submitVacancy = (e) => {
    e.preventDefault();
    const vacancy = {
      ...newVacancy,
      id: vacancies.length + 1,
      status: "Pending Approval",
      datePosted: new Date().toLocaleDateString(),
    };
    setVacancies([...vacancies, vacancy]);
    setNewVacancy({
      title: "",
      description: "",
      requirements: "",
      location: "",
      type: "Full-time",
      salary: "",
    });
    setShowForm(false);
  };

  return (
    <div className="provider-dashboard">
      <header className="dashboard-header">
        <h1>Job Provider Dashboard</h1>
        <div
          className="profile-icon"
          onClick={() => navigate("/provider-profile")}
        >
          <span>{profile.companyName.charAt(0)}</span>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="profile-section">
          <h2>Company Profile</h2>
          <div className="profile-details">
            <p>
              <strong>Company Name:</strong> {profile.companyName}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Contact Person:</strong> {profile.contactPerson}
            </p>
            <p>
              <strong>Industry:</strong> {profile.industry}
            </p>
            <p>
              <strong>Company Size:</strong> {profile.companySize}
            </p>
          </div>
        </div>

        <div className="vacancies-section">
          <div className="section-header">
            <h2>Job Vacancies</h2>
            <button
              className="add-vacancy-btn"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Cancel" : "Post New Vacancy"}
            </button>
          </div>

          {showForm && (
            <form onSubmit={submitVacancy} className="vacancy-form">
              <div className="form-group">
                <label>Job Title*</label>
                <input
                  type="text"
                  name="title"
                  value={newVacancy.title}
                  onChange={handleVacancyChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Job Description*</label>
                <textarea
                  name="description"
                  value={newVacancy.description}
                  onChange={handleVacancyChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Requirements*</label>
                <textarea
                  name="requirements"
                  value={newVacancy.requirements}
                  onChange={handleVacancyChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Location*</label>
                  <input
                    type="text"
                    name="location"
                    value={newVacancy.location}
                    onChange={handleVacancyChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Job Type*</label>
                  <select
                    name="type"
                    value={newVacancy.type}
                    onChange={handleVacancyChange}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Salary Range</label>
                <input
                  type="text"
                  name="salary"
                  value={newVacancy.salary}
                  onChange={handleVacancyChange}
                  placeholder="e.g. $50,000 - $70,000"
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit for Approval
              </button>
            </form>
          )}

          <div className="vacancies-list">
            {vacancies.length > 0 ? (
              vacancies.map((vacancy) => (
                <div key={vacancy.id} className="vacancy-card">
                  <h3>
                    {vacancy.title}{" "}
                    <span
                      className={`status-badge ${vacancy.status
                        .replace(" ", "-")
                        .toLowerCase()}`}
                    >
                      {vacancy.status}
                    </span>
                  </h3>
                  <p>
                    <strong>Location:</strong> {vacancy.location}
                  </p>
                  <p>
                    <strong>Type:</strong> {vacancy.type}
                  </p>
                  <p>
                    <strong>Posted:</strong> {vacancy.datePosted}
                  </p>
                  <div className="vacancy-actions">
                    <button className="view-btn">View Details</button>
                    <button className="edit-btn">Edit</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No vacancies posted yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
