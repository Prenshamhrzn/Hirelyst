import "../css/featues.css";
import { FaRobot } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
function Features(){
    return(
        <div>
                <section class="features">
      <h2>Features</h2>
      <div class="feature-list">
        <div class="feature-item">
            <FaRobot size={50} />
          <h3>AI-Powered Matching</h3>
          <p>Personalized suggestions based on your profile</p>
          <img src="" alt="AI Icon" />
        </div>
        <div class="feature-item">
          <h3>Resume Analyzer</h3>
          <p>Improve your CV instantly with feedback</p>
          {/* <img src="https://via.placeholder.com/48" alt="Resume Icon" /> */}
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