import "../css/header.css";
import { FaHireAHelper } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        {/* Logo Section */}
        <div className="logo">
          <FaHireAHelper size={32} color="#0e7c0e" />
          <span className="logo-text">Hirelyst</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/browse-jobs">Jobs</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link to="/loginPage" className="login-btn">
            Login
          </Link>
          <Link to="/registerPage" className="register-btn">
            Register
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
