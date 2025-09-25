import { Link } from "react-router-dom";
import "../css/banner.css";
import {
  FaSearch,
  FaArrowRight,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";
import SearchBar from "./SearchBar";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-grid">
          {/* LEFT: Search + Text */}
          <div className="banner-text">
            <div className="left-search">
              <SearchBar
                onSearch={(query) => console.log("Search query:", query)}
                compact={true}
              />
            </div>

            {/* <div className="banner-badge">
              <span>Smart Job Matching</span>
            </div> */}

            <h1>
              Find Your Dream <span className="accent-text">Job</span> &{" "}
              <span className="accent-text">Internship</span>
            </h1>
            <p>Smart recommendations tailored to your skills and goals.</p>

            <div className="button-group">
              <Link to="loginPage" className="btn-link">
                <button className="btn-primary">
                  Get Started Now <FaArrowRight className="btn-icon" />
                </button>
              </Link>

              <Link to="/browse-jobs" className="btn-link">
                <button className="btn-secondary">
                  <FaSearch className="btn-icon" /> Browse All Jobs
                </button>
              </Link>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="stat-icon">
                  <FaBuilding />
                </div>
                <div className="stat-details">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Top Companies</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <FaBriefcase />
                </div>
                <div className="stat-details">
                  <span className="stat-number">10,000+</span>
                  <span className="stat-label">Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Realistic image */}
          <div className="banner-image">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
              alt="Team collaborating in modern office"
              className="main-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
