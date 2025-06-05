import { Link } from "react-router-dom";
import "../css/banner.css";
function Banner() {
  return (
    <div>
      <section class="hero">
        <div class="hero-text">
          <h1>Find the Right Internship & Job Match with Hirelyst</h1>
          <p>Smart recommendations tailored to your skills and goals.</p>
          <Link to="get-started">
           <button class="cta">Get Started</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Banner;
