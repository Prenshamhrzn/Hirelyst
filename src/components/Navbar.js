import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "16px",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Link to="/" style={{ marginRight: "20px" }}>
        Home
      </Link>
      <Link to="/browse-jobs">Browse Jobs</Link>
    </nav>
  );
};

export default Navbar;
