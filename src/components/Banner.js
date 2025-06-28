import { Link } from "react-router-dom";
import "../css/banner.css";
function Banner() {
  return (
    <div>
      <section class="hero">
        <div class="hero-text">
          <h1>Find the Right Internship & Job Match with Hirelyst</h1>
          <p>Smart recommendations tailored to your skills and goals.</p>

          <Link to="loginPage">
            <button class="cta">Get Started</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="im.png"></img>
        </div>
      </section>
    </div>
  );
}
export default Banner;
