import "../css/Aboutus.css";
import aboutImage from "./abouut.png";
function Aboutus() {
  return (
    <div className="about-wrapper">
      <h1 className="about-title">About Us</h1>

      <div className="about-container">
        {/* Left side: Image */}
        <div className="about-image-section">
          <img
            src={aboutImage}
            alt="About CareerLink Nepal"
            className="about-image"
          />
        </div>

        {/* Right side: Text */}
        <div className="about-text-section">
          <p className="about-text">
            Welcome to <strong>Hirelyst</strong>, a job and internship platform
            designed for students and fresh graduates in Nepal. We aim to
            connect young talent with the right opportunities by offering a
            smart, user-friendly portal.
          </p>
          <p className="about-text">
            Our hybrid recommendation engine suggests jobs based on your resume,
            interests, and activity which improves over time for better results.
            Users can create profiles, select their interests, receive
            personalized job suggestions, search listings, and track
            applications easily.
          </p>
          <p className="about-text">
            Employers can post jobs, review applicants, and hire efficiently,
            while admins ensure quality and remove spam. With a clean interface
            and tailored features, Hirelyst helps launch your career with
            confidence.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Aboutus;
