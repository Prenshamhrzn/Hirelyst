//Blog.js
import { useState } from "react";
import "../css/blog.css";

const BlogPost = ({ post, isExpanded, onToggle }) => (
  <div className="blog-post">
    <h2>{post.title}</h2>
    <p className="date">{post.date}</p>
    <div className="blog-content">
      {isExpanded ? post.full : <p>{post.preview}</p>}
    </div>
    <button
      className="read-more-btn"
      onClick={onToggle}
      aria-expanded={isExpanded}
    >
      {isExpanded ? "Show Less" : "Read More"}
    </button>
  </div>
);

function Blog() {
  const [expandedPosts, setExpandedPosts] = useState(new Set());

  const toggleExpand = (index) => {
    const newSet = new Set(expandedPosts);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedPosts(newSet);
  };

  const blogPosts = [
    {
      title: "5 Tips to Get Your First Internship",
      date: "June 1, 2025",
      preview: "Starting your career journey can feel overwhelming. This post guides you through building your resume...",
      full: (
        <>
          <p>Starting your career journey can feel overwhelming. This post guides you through five essential steps:</p>
          <ul>
            <li>Build a clear and concise resume.</li>
            <li>Leverage platforms like Hirelyst to discover internship opportunities tailored to your skills.</li>
            <li>Prepare for behavioral and technical interviews.</li>
            <li>Network with peers and mentors.</li>
            <li>Stay consistent and never stop learning.</li>
          </ul>
          <p>Whether you're a college student or a recent graduate, these tips can increase your chances of securing your first role.</p>
        </>
      ),
    },
    {
      title: "Why Personalized Job Recommendations Matter",
      date: "May 25, 2025",
      preview: "Hirelyst helps you discover internships and jobs that suit your profile...",
      full: (
        <>
          <p>Hirelyst helps you discover internships and jobs that suit your profile, thanks to its personalized recommendation engine. Instead of wasting time scrolling endlessly, you’re matched with opportunities based on:</p>
          <ul>
            <li>Your skillset</li>
            <li>Your interests</li>
            <li>Your educational background</li>
            <li>Previous search behavior</li>
          </ul>
          <p>This means fewer irrelevant listings and more time applying to roles that truly fit you.</p>
        </>
      ),
    },
    {
      title: "Top 10 Skills Employers Look for in Freshers",
      date: "May 15, 2025",
      preview: "Want to stand out in job applications? This blog highlights the top skills freshers need...",
      full: (
        <>
          <p>To land a job or internship as a fresher, you need more than just a degree. This post highlights the top 10 skills employers are looking for:</p>
          <ul>
            <li>Communication (verbal & written)</li>
            <li>Adaptability</li>
            <li>Team collaboration</li>
            <li>Critical thinking</li>
            <li>Time management</li>
            <li>Leadership potential</li>
            <li>Digital literacy (Google Workspace, Excel)</li>
            <li>Technical skills (e.g., Python, SQL)</li>
            <li>Creativity and innovation</li>
            <li>Basic project management</li>
          </ul>
          <p>We also explain how you can develop and showcase these skills on platforms like Hirelyst to strengthen your profile.</p>
        </>
      ),
    },
  ];

  return (
    <section className="blog">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>
          Explore career insights, application tips, and platform features—designed for students and fresh graduates.
        </p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            post={post}
            isExpanded={expandedPosts.has(index)}
            onToggle={() => toggleExpand(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog;