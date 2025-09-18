import { useState, useEffect } from "react";
import "../css/blog.css";
import axios from "axios";

const BlogPost = ({ post, index, isExpanded, onToggle }) => (
  <div className="blog-post">
    <h2>{post.title}</h2>
    <p className="date">{new Date(post.createdAt).toLocaleDateString()}</p>
    <div className="blog-content">
      {isExpanded ? (
        <p>{post.content}</p>
      ) : (
        <p>{post.content.slice(0, 150)}...</p>
      )}
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
  const [blogs, setBlogs] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);

  const toggleExpand = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.68:5000/api/blogs/getBlogs"
        ); // your backend URL
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blog">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>
          Explore career insights, application tips, and platform
          features—designed for students and fresh graduates.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((post, index) => (
          <BlogPost
            key={index}
            post={post}
            index={index}
            isExpanded={expandedPost === index}
            onToggle={() => toggleExpand(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog;
