import "../css/services.css";
import { MdFindInPage } from "react-icons/md";
import { MdOutlineRecommend } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoBookmarksSharp } from "react-icons/io5";
function Services(){
    return(
        <div>
            <section className="services">
            <h2> Our Services</h2>
            <div className="service-list">
                <div className="service-item">
                    <MdFindInPage size="60" color="purple" />
                    <h3>Internship Finder</h3>
                    <p>Access top internship openings matched to your profile.</p>
                </div>
                <div className="service-item">
                    <MdOutlineRecommend  size="60" color="red"/>
                    <h3>Job Recommendations</h3>
                    <p>Get job suggestions based on your skills and interests.</p>
                </div>
                <div className="service-item">
                    <MdOutlineMarkEmailUnread size="60" color=" green" />
                    <h3>Email Notifications</h3>
                    <p>Stay updated with new job alerts sent straight to your inbox.</p>
                </div>
                <div className="service-item">
                    <IoBookmarksSharp  size="60" color="orange"/>
                    <h3>Bookmark Oppotunities</h3>
                     <p>Save interesting internships or jobs to apply later.</p>
                </div>
            </div>
</section>
        </div>
       
    )
}
export default Services;