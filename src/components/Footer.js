import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <h3 className="footer-logo">Hirelyst</h3>
            <p className="footer-description">
              Connecting talent with opportunity through smart matching
              technology.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jobs">Browse Jobs</Link>
              </li>
              <li>
                <Link to="/internships">Internships</Link>
              </li>
              <li>
                <Link to="/companies">Top Companies</Link>
              </li>
              <li>
                <Link to="/career-resources">Career Resources</Link>
              </li>
            </ul>
          </div>

          {/* Job Seeker Resources */}
          <div className="footer-column">
            <h4>Job Seekers</h4>
            <ul className="footer-links">
              <li>
                <Link to="/create-profile">Create Profile</Link>
              </li>

              <li>
                <Link to="/interview-tips">Interview Tips</Link>
              </li>
              <li>
                <Link to="/salary-guide">Salary Guide</Link>
              </li>
              <li>
                <Link to="/skill-assessment">Skill Assessment</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <FaEnvelope />{" "}
                <a href="mailto:hello@hirelyst.com">hello@hirelyst.com</a>
              </li>
              <li>
                <FaPhone /> <a href="tel:+18005551234">(800) 555-1234</a>
              </li>
              <li>
                <FaMapMarkerAlt /> Kathmandu, Lalitpur
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <h4>Get Job Alerts</h4>
          <p>
            Subscribe to receive the latest job opportunities matching your
            profile
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Hirelyst. All rights reserved.
          </div>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
