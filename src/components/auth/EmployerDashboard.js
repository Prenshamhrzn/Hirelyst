import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/EmployerDashboard.css";

const EmployerDashboard = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "undefined" || token === null) {
      navigate("/loginPage");
    } else {
      fetchCompanyInfo();
    }
  }, [navigate]);

  const fetchCompanyInfo = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/employers/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCompanyInfo(data);
        setVacancies(data.vacancies || []);
      } else {
        console.error("Failed to fetch company info");
      }
    } catch (error) {
      console.error("Error fetching company info:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/loginPage");
  };

  const handleVacancyChange = (e) => {
    const { name, value } = e.target;
    setNewVacancy((prev) => ({ ...prev, [name]: value }));
  };

  const submitVacancy = (e) => {
    e.preventDefault();
    const updatedVacancies = [...vacancies, { ...newVacancy, id: Date.now(), status: "Pending", datePosted: new Date().toLocaleDateString() }];
    setVacancies(updatedVacancies);
    setShowForm(false);
    setNewVacancy({
      title: "",
      description: "",
      requirements: "",
      location: "",
      type: "Full-time",
      salary: "",
    });
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-card">
        <h2>👋 Welcome to Your Dashboard</h2>

        {companyInfo ? (
          <div className="info-section">
            <h3>📄 Company Profile</h3>
            <ul>
              <li><strong>🏢 Company Name:</strong> {companyInfo.companyName}</li>
              <li><strong>📧 Email:</strong> {companyInfo.email}</li>
              <li><strong>👤 Contact Person:</strong> {companyInfo.contactPerson}</li>
              <li><strong>📞 Phone:</strong> {companyInfo.phone}</li>
              <li><strong>🏭 Industry:</strong> {companyInfo.industry}</li>
              <li><strong>👥 Company Size:</strong> {companyInfo.companySize}</li>
              <li><strong>🌐 Website:</strong> <a href={companyInfo.website} target="_blank" rel="noreferrer">{companyInfo.website}</a></li>
            </ul>
          </div>
        ) : (
          <p className="loading">⏳ Loading company information...</p>
        )}

        <div className="vacancies-section">
          <div className="section-header">
            <h2>📢 Job Vacancies</h2>
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
                  <p><strong>Location:</strong> {vacancy.location}</p>
                  <p><strong>Type:</strong> {vacancy.type}</p>
                  <p><strong>Posted:</strong> {vacancy.datePosted}</p>
                  <div className="vacancy-actions">
                    <button className="view-btn">View</button>
                    <button className="edit-btn">Edit</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No vacancies posted yet.</p>
            )}
          </div>
        </div>

        <button onClick={handleLogout} className="logout-button">
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default EmployerDashboard;
