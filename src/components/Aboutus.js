import "../css/Aboutus.css";
import aboutImage from "./abouut.png";
import { FaRocket, FaUserTie, FaSearch, FaChartLine } from "react-icons/fa";

function Aboutus() {
  return (
    <div className="about-wrapper">
      <div className="about-header">
        <h1 className="about-title">
          About <span>Hirelyst</span>
        </h1>
        <p className="about-subtitle">
          Bridging Talent with Opportunity in Nepal
        </p>
      </div>

      <div className="about-container">
        {/* Left side: Image */}
        <div className="about-image-section">
          <img src={aboutImage} alt="About Hirelyst" className="about-image" />
          <div className="image-overlay"></div>
        </div>

        {/* Right side: Text */}
        <div className="about-text-section">
          <div className="about-intro">
            <p className="about-text">
              Welcome to <strong>Hirelyst</strong>, Nepal's premier job and
              internship platform designed specifically for students and fresh
              graduates. We're revolutionizing the way young talent connects
              with career opportunities through our intelligent, user-centric
              platform.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>Smart Recommendations</h3>
              <p>
                Our hybrid engine suggests perfect matches based on your profile
                and activity.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaUserTie />
              </div>
              <h3>For Job Seekers</h3>
              <p>
                Create profiles, select interests, and track applications
                effortlessly.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaSearch />
              </div>
              <h3>For Employers</h3>
              <p>
                Post jobs, review applicants, and hire efficiently with our
                tools.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Continuous Improvement</h3>
              <p>Our system learns and provides better matches over time.</p>
            </div>
          </div>

          <div className="about-cta">
            <p className="about-text">
              With a clean, intuitive interface and features tailored for the
              Nepalese market, Hirelyst is your trusted partner in launching a
              successful career.
            </p>
            <button className="cta-button">Join Hirelyst Today</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
