import "../css/feature.css";
import { FcBusinessman } from "react-icons/fc";
import { IoNotificationsCircle } from "react-icons/io5";
import { HiOutlineSaveAs } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
function Features(){
    return(
        <div>
                <section class="features">
      <h2>Features</h2>
      <div class="feature-list">
        <div class="feature-item">
            <FcBusinessman size={50} />
          <h3>Business Matching</h3>
          <p>Our system connects students and graduates with the right opportunities</p>
        </div>
        <div class="feature-item">
          <IoNotificationsCircle size={50} color="blue"/>
            <h3>Email Alerts</h3>
            <p>Get notified about new matching opportunities</p>
        </div>
        <div className="feature-item">
            <HiOutlineSaveAs size={50} color="darkblue" />
            <h3>Save Jobs</h3>
            <p>Bookmark jobs you want to apply for later</p>
          </div>
        <div class="feature-item">
            <FaGlobeAmericas size={50} color="green"/>
          <h3>Global Reach</h3>
          <p>Remote and on-site jobs from top companies</p>
          {/* <img src="https://via.placeholder.com/48" alt="Globe Icon" /> */}
        </div>
      </div>
    </section>
        </div>
    )
}

export default Features