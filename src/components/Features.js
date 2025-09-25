import "../css/feature.css";
import { FcBusinessman } from "react-icons/fc";
import { IoNotificationsCircle } from "react-icons/io5";
import { HiOutlineSaveAs } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";

function Features() {
  return (
    <section className="features">
      <h2>Platform Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <div className="icon">
            <FcBusinessman size={50} />
          </div>
          <h3>Business Matching</h3>
          <p>
            Connect with ideal internships and job roles tailored to your
            profile.
          </p>
        </div>

        <div className="feature-item">
          <div className="icon">
            <IoNotificationsCircle size={50} color="#0e7c0e" />
          </div>
          <h3>Email Alerts</h3>
          <p>
            Get real-time alerts for new opportunities that match your goals.
          </p>
        </div>

        <div className="feature-item">
          <div className="icon">
            <HiOutlineSaveAs size={50} color="#125d02" />
          </div>
          <h3>Save Jobs</h3>
          <p>Bookmark job listings and apply when you're ready.</p>
        </div>

        <div className="feature-item">
          <div className="icon">
            <FaGlobeAmericas size={50} color="#0e7c0e" />
          </div>
          <h3>Global Reach</h3>
          <p>Discover remote or on-site roles from trusted global companies.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
