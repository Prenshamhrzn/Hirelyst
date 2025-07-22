import React, { useState } from "react";
import "../css/LoginPage.css";

function LoginPage() {
  const [userType, setUserType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (type) => {
    setUserType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    try {
      const endpoint = userType === "User" ? "users" : "employers";

      const res = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert(`✅ ${userType} registered: ${result.email}`);
      } else {
        alert(`❌ Error: ${result.message || "Registration failed"}`);
      }
    } catch (error) {
      console.error("❌ API error:", error);
      alert("❌ Backend connection error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="title">Welcome to JobFinder</h1>
        <p className="subtitle">Find your dream job or the perfect candidate</p>
      </div>

      {!userType ? (
        <div className="selection">
          <h2>I want to login as:</h2>
          <div className="selection-cards">
            <div className="selection-card" onClick={() => handleSelect("User")}>
              <div className="card-icon">👨‍💼</div>
              <h3>Job Seeker</h3>
              <p>Looking for your next opportunity</p>
            </div>
            <div className="selection-card" onClick={() => handleSelect("Job Provider")}>
              <div className="card-icon">🏢</div>
              <h3>Employer</h3>
              <p>Hiring top talent for your company</p>
            </div>
          </div>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>{userType === "User" ? "Job Seeker" : "Employer"} Login</h2>
            <p>Please enter your details to continue</p>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="your@email.com" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="••••••••" required />
          </div>

          {userType === "User" && (
            <>
              <div className="input-group">
                <label>Resume (Link)</label>
                <input type="url" name="resume" placeholder="https://linkedin.com/in/yourprofile" required />
              </div>
              <div className="input-group">
                <label>Skills</label>
                <input type="text" name="skills" placeholder="e.g., React, Node.js, Python" />
              </div>
            </>
          )}

          {userType === "Job Provider" && (
            <>
              <div className="input-group">
                <label>Company Name</label>
                <input type="text" name="companyName" placeholder="Your Company Inc." required />
              </div>
              <div className="input-group">
                <label>Job Role</label>
                <input type="text" name="jobrole" placeholder="Position you're hiring for" required />
              </div>
              <div className="input-group">
                <label>Contact Number</label>
                <input type="tel" name="contact" placeholder="+1 (123) 456-7890" required />
              </div>
            </>
          )}

          <div className="form-actions">
            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? <><span className="spinner"></span> Processing...</> : "Continue"}
            </button>
            <button type="button" className="back-button" onClick={() => setUserType(null)}>
              ← Go Back
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
