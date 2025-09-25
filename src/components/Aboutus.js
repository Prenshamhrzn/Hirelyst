import "../css/Aboutus.css";
import realScenarioImage from "./real-about.jpg"; // Replace with an actual image of jobseekers/interviews
import {
  FaRocket,
  FaUserGraduate,
  FaBuilding,
  FaLightbulb,
} from "react-icons/fa";

function Aboutus() {
  return (
    <div className="about-wrapper">
      <div className="about-header">
        <h1 className="about-title">
          About <span>Hirelyst</span>
        </h1>
        <p className="about-subtitle">
          Empowering Nepal's Youth — Connecting Talent to Opportunity
        </p>
      </div>

      <div className="about-container">
        {/* Left Side: Image */}
        <div className="about-image-section">
          <img
            src={realScenarioImage}
            alt="Real Job Scenario in Nepal"
            className="about-image"
          />
          <div className="image-overlay"></div>
        </div>

        {/* Right Side: Text */}
        <div className="about-text-section">
          <div className="about-intro">
            <p className="about-text">
              <strong>Hirelyst</strong> is Nepal's trusted platform for students
              and fresh graduates to discover jobs and internships. With a clean
              interface and smart tools, we connect you to career opportunities
              that truly match your potential.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>Smart Matching</h3>
              <p>
                Our algorithm recommends tailored opportunities that align with
                your interests and skills.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaUserGraduate />
              </div>
              <h3>Student-Focused</h3>
              <p>
                We design for students — intuitive profiles, academic-friendly
                filters, and growth-oriented listings.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaBuilding />
              </div>
              <h3>Employer Tools</h3>
              <p>
                Employers get streamlined posting, applicant tracking, and
                AI-powered sorting features.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaLightbulb />
              </div>
              <h3>Adaptive Learning</h3>
              <p>
                Our system continuously evolves to suggest better matches as you
                interact more.
              </p>
            </div>
          </div>

          <div className="about-cta">
            <p className="about-text">
              Whether you're just beginning your journey or hiring your next
              star — Hirelyst is your partner in progress.
            </p>
            <button className="cta-button">Get Started with Hirelyst</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
