import { useState } from "react";
import "../css/blog.css";
import aboutImage from "./abouut.png";

function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

  const toggleExpand = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  const blogPosts = [
    {
      image: aboutImage,
      other: "dfkdsfkljflkdf",
      title: "5 Tips to Get Your First Internship",
      date: "June 1, 2025",
      preview:
        "Starting your career journey can feel challenging. This post walks you through building your resume...",
      full: "Starting your career journey can feel challenging. This post walks you through building your resume, preparing for interviews, finding the right internships on platforms like Hirelyst, and how to stand out among other applicants. Whether you’re in college or just graduated, these tips will help you land that first opportunity.",
    },
    {
      image: aboutImage,
      title: "Why Personalized Job Recommendations Matter",
      date: "May 25, 2025",
      preview:
        "Hirelyst helps you discover internships and jobs that suit your profile...",
      full: "Hirelyst helps you discover internships and jobs that suit your profile, based on your interests, skills, and previous activity. Instead of endlessly searching, Hirelyst recommends roles you're most likely to succeed in.",
    },

    {
      image: aboutImage,
      title: "Top 10 Skills Employers Look for in Freshers",
      date: "May 15, 2025",
      preview:
        "Want to stand out in job applications? This blog highlights the top skills freshers need...",
      full: "Want to stand out in job applications? This blog highlights the top skills freshers need—from communication, adaptability, teamwork, and problem-solving to technical skills like Excel, Python, or digital marketing. Learn how to acquire and showcase these skills on platforms like Hirelyst to increase your chances of success.",
    },
  ];

  return (
    <div>
      <section className="blog-section">
        <div className="blog-header">
          <h1>Blog</h1>
          <p>
            Explore helpful career tips, internship advice, and job-seeking
            strategies curated for you.
          </p>
        </div>

        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <img src={post.image} />
              <h2>{post.title}</h2>

              <p className="date">{post.date}</p>
              <p>{expandedPost === index ? post.full : post.preview}</p>
              <button
                className="read-more-btn"
                onClick={() => toggleExpand(index)}
              >
                {expandedPost === index ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Blog;
