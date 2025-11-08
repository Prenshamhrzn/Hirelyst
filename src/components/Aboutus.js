import "../css/Aboutus.css";
import { FaUserGraduate, FaBuilding, FaHandsHelping } from "react-icons/fa";

function Aboutus() {
  return (
    <section className="about-wrapper">
      {/* Header */}
      <header className="about-header">
        <h1 className="about-title">
          About <span>Hirelyst</span>
        </h1>
        <p className="about-subtitle">
          Empowering Nepal's Youth — Connecting Talent to Opportunity
        </p>
      </header>

      {/* Main content */}
      <div className="about-container no-image">
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
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaUserGraduate />
              </div>
              <h3>Student-Focused</h3>
              <p>
                Intuitive profiles, academic-friendly filters, and
                growth-oriented listings built just for students.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaBuilding />
              </div>
              <h3>Employer Tools</h3>
              <p>
                Streamlined posting, applicant tracking, and efficient candidate
                management for recruiters.
              </p>
            </div>

            {/* Feature 3 (New) */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaHandsHelping />
              </div>
              <h3>Career Guidance</h3>
              <p>
                Access curated resources, resume-building tips, and mentorship
                support to help you grow in your professional journey.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="about-cta">
            <p className="about-text cta-text">
              Whether you're just beginning your journey or hiring your next
              star — <strong>Hirelyst</strong> is your partner in progress.
            </p>
            <button className="cta-button">Get Started with Hirelyst</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
