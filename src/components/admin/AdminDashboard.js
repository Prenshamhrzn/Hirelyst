import React, { useState, useEffect } from "react";
import "../../css/Admin.css"; // Goes up two levels to reach the css folder

const AdminDashboard = () => {
  const [seekers, setSeekers] = useState([]);
  const [providers, setProviders] = useState([]);
  const [selectedTab, setSelectedTab] = useState("providers");

  // Mock data - in real app, fetch from API
  useEffect(() => {
    // Simulate API calls
    setSeekers([
      { id: 1, name: "John Doe", skills: "React, Node.js", status: "active" },
      { id: 2, name: "Jane Smith", skills: "Python, Django", status: "active" },
    ]);

    setProviders([
      { id: 1, company: "Tech Corp", status: "pending" },
      { id: 2, company: "Data Inc", status: "approved" },
    ]);
  }, []);

  const approveProvider = (id) => {
    setProviders(
      providers.map((p) => (p.id === id ? { ...p, status: "approved" } : p))
    );
  };

  const rejectProvider = (id) => {
    setProviders(
      providers.map((p) => (p.id === id ? { ...p, status: "rejected" } : p))
    );
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      <div className="admin-tabs">
        <button
          onClick={() => setSelectedTab("providers")}
          className={selectedTab === "providers" ? "active" : ""}
        >
          Manage Providers
        </button>
        <button
          onClick={() => setSelectedTab("seekers")}
          className={selectedTab === "seekers" ? "active" : ""}
        >
          Manage Seekers
        </button>
      </div>

      {selectedTab === "providers" && (
        <div className="providers-table">
          <h2>Job Providers</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.id}</td>
                  <td>{provider.company}</td>
                  <td>{provider.status}</td>
                  <td>
                    {provider.status === "pending" && (
                      <>
                        <button onClick={() => approveProvider(provider.id)}>
                          Approve
                        </button>
                        <button onClick={() => rejectProvider(provider.id)}>
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedTab === "seekers" && (
        <div className="seekers-table">
          <h2>Job Seekers</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Skills</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {seekers.map((seeker) => (
                <tr key={seeker.id}>
                  <td>{seeker.id}</td>
                  <td>{seeker.name}</td>
                  <td>{seeker.skills}</td>
                  <td>{seeker.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
