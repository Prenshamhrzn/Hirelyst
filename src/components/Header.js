import { LiaAdn } from "react-icons/lia";
import "../css/header.css";
import { FaHireAHelper } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header-container">
      <header class="header">
        <div class="logo">
          <FaHireAHelper size={40} color="orange" /> Hirelyst
        </div>
        {/* <div class="logo"><div className="img_logo"><img src="hire.png"></img></div> Hirelyst</div> */}
        <nav class="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Link to="/loginPage" className="login-btn">
<<<<<<< HEAD
          Login
=======
          login
>>>>>>> c34cc76 (updated code)
        </Link>
      </header>
    </div>
  );
}

export default Header;
