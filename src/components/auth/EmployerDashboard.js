import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Select, message } from "antd";
import "../../css/EmployerDashboard.css";
import axios from "axios";

const { TextArea } = Input;

const EmployerDashboard = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [vacancies, setVacancies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
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

  const onFinish = async (values) => {
    try {
      // API call to add vacancy
      const response = await axios.post(
        "http://192.168.1.68:5000/api/jobs/addJob",
        values
      );

      if (response.status === 200 || response.status === 201) {
        message.success("Vacancy posted successfully!");
        const newVacancy = {
          ...values,
          id: Date.now(),
          status: "Pending",
          datePosted: new Date().toLocaleDateString(),
        };
        setVacancies([...vacancies, newVacancy]);
        setShowForm(false);
      } else {
        message.error("Failed to post vacancy");
      }
    } catch (error) {
      console.error("Error posting vacancy:", error);
      message.error("Error posting vacancy");
    }
  };

  return (
    <div className="employer-dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Employer Panel</h2>
        <ul className="sidebar-menu">
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            🏠 Dashboard
          </li>
          <li
            className={activeTab === "vacancies" ? "active" : ""}
            onClick={() => setActiveTab("vacancies")}
          >
            📢 Job Vacancies
          </li>
          <li onClick={() => alert("Applicants feature coming soon!")}>
            👥 Applicants
          </li>
          <li onClick={handleLogout}>🚪 Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Company logo top right */}
        <div
          className="company-logo-topright"
          onClick={() => navigate("/company-info")}
          title="View Company Info"
        >
          <div className="logo-circle">
            {companyInfo && companyInfo.companyName
              ? companyInfo.companyName[0].toUpperCase()
              : "🏢"}
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="dashboard-tab">
            <h2>👋 Welcome to Your Dashboard</h2>
            {!companyInfo && (
              <p className="loading">⏳ Loading company information...</p>
            )}
          </div>
        )}

        {/* Vacancies Tab */}
        {activeTab === "vacancies" && (
          <div className="vacancies-section">
            <div className="section-header">
              <h2>📢 Job Vacancies</h2>
              <Button onClick={() => setShowForm(!showForm)}>
                {showForm ? "Cancel" : "Post New Vacancy"}
              </Button>
            </div>

            {showForm && (
              <Form
                layout="vertical"
                onFinish={onFinish}
                className="vacancy-form"
              >
                <Form.Item
                  label="Job Title"
                  name="title"
                  rules={[
                    { required: true, message: "Please enter job title" },
                  ]}
                >
                  <Input placeholder="Job Title" />
                </Form.Item>

                <Form.Item
                  label="Job Description"
                  name="description"
                  rules={[
                    { required: true, message: "Please enter job description" },
                  ]}
                >
                  <TextArea rows={4} placeholder="Job Description" />
                </Form.Item>

                <Form.Item
                  label="Requirements"
                  name="requirements"
                  rules={[
                    { required: true, message: "Please enter requirements" },
                  ]}
                >
                  <TextArea rows={3} placeholder="Requirements" />
                </Form.Item>

                <Form.Item
                  label="Location"
                  name="location"
                  rules={[{ required: true, message: "Please enter location" }]}
                >
                  <Input placeholder="Location" />
                </Form.Item>

                <Form.Item label="Job Type" name="type">
                  <Select defaultValue="Full-time">
                    <Select.Option value="Full-time">Full-time</Select.Option>
                    <Select.Option value="Part-time">Part-time</Select.Option>
                    <Select.Option value="Contract">Contract</Select.Option>
                    <Select.Option value="Internship">Internship</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Salary Range" name="salary">
                  <Input placeholder="e.g. $50,000 - $70,000" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit for Approval
                  </Button>
                </Form.Item>
              </Form>
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
                      <Button className="view-btn">View</Button>
                      <Button className="edit-btn">Edit</Button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No vacancies posted yet.</p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default EmployerDashboard;
