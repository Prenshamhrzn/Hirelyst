import "../css/contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-content">
          <h2>Contact & Reach Us!</h2>
          <p>
            Have questions or need assistance? Our team is here to help you
            anytime. We're committed to providing quick and helpful responses.
          </p>

          <div className="contact-details">
            <p>
              <FaLocationDot style={{ marginRight: "8px" }} />
              <strong>Address:</strong> Jawalakhel, Lalitpur
            </p>
            <p>
              <FaPhoneAlt style={{ marginRight: "8px" }} />
              <strong>Phone:</strong> +977 9806802951
            </p>
            <p>
              <TfiEmail style={{ marginRight: "8px" }} />
              <strong>Email:</strong> hirelyst01@gmail.com
            </p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
