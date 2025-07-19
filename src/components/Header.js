import { LiaAdn } from "react-icons/lia";
import "../css/header.css";
import { FaHireAHelper } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">
          <FaHireAHelper size={40} color="orange" /> Hirelyst
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/browse-jobs">Browse Jobs</Link> {/* Updated here */}
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Link to="/loginPage" className="login-btn">
          Login
        </Link>
      </header>
    </div>
  );
}

export default Header;
