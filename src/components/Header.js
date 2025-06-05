import "../css/header.css";

function Header() {
  return (
    <div className="header-container">
      <header class="header">
        <div class="logo">Hirelyst</div>
        <nav class="nav">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
        <a href="#" class="login-btn">
          Login
        </a>
      </header>
    </div>
  );
}

export default Header;
