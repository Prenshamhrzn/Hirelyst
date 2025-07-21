import { Link } from "react-router-dom";
import "../css/banner.css";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import SearchBar from "./SearchBar";

function Banner() {
  return (
    <div className="banner-container">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            {/* ✅ Elevated SearchBar */}
            <div className="elevated-search">
              <SearchBar
                onSearch={(query) => console.log("Search query:", query)}
              />
            </div>

            <div>
              <h1>Find the Right Internship & Job Match with Hirelyst</h1>
              <p>Smart recommendations tailored to your skills and goals.</p>
            </div>

            <br />

            <div className="cta-section">
              <Link to="loginPage" className="cta-link">
                <button className="cta-button primary">
                  Get Started <FaArrowRight className="cta-icon" />
                </button>
              </Link>

              <Link to="/browse-jobs" className="cta-link">
                <button className="cta-button secondary">
                  <FaSearch className="cta-icon" /> Browse Jobs
                </button>
              </Link>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Opportunities</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Match Accuracy</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="im.png"
              alt="Young professionals finding jobs"
              className="floating-image"
            />
            <div className="image-decoration"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
