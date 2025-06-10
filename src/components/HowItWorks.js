import "../css/how.css";
import { HiMiniUserCircle } from "react-icons/hi2";
import { MdLinearScale } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
function HowItWorks(){
    return(
        <div>

<section class="how-it-works">
      <h2>How It Works</h2>
      <div class="steps">
        <div class="step">
          <HiMiniUserCircle  size={60} color="orange" />
          <h3>Sign Up & Upload Resume</h3>
          <p>Personalized suggestions based on your profile</p>
        </div>
        <div class="step">
          <MdLinearScale  size={60} color="blue" />
          <h3>Set Preferences<br/>(Field, Location, Role)</h3>
          <p>Improve your CV instantly with feedback</p>
        </div>
        <div class="step">
          <RiVerifiedBadgeFill size={60} color="green" />

          <h3>Receive & Apply to Recommendations</h3>
          <p>Receive & apply to recommendations</p>
        </div>
      </div>
    </section>
        </div>
    )
}
export default HowItWorks;