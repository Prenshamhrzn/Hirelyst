import "../css/how.css";
import { HiMiniUserCircle } from "react-icons/hi2";
import { MdLinearScale } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <HiMiniUserCircle size={60} color="#0e7c0e" />
          <h3>Sign Up & Upload Resume</h3>
          <p>
            Create a profile and upload your CV to get personalized suggestions.
          </p>
        </div>

        <div className="step">
          <MdLinearScale size={60} color="#125d02" />
          <h3>Set Preferences</h3>
          <p>
            Choose your field, location, and desired roles to tailor results.
          </p>
        </div>

        <div className="step">
          <RiVerifiedBadgeFill size={60} color="green" />
          <h3>Apply to Matches</h3>
          <p>
            Receive top matches and apply directly to the best-fit
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
