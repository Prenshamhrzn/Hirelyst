import { useState, useEffect } from "react";
import axios from "axios";
import "../css/blog.css";

// ✅ Blog Post Card Component
const BlogPost = ({ post, isExpanded, onToggle }) => (
  <div className="blog-post">
    <h2>{post.title}</h2>
    <p className="date">{new Date(post.createdAt).toLocaleDateString()}</p>

    <div className="blog-content">
      {isExpanded ? (
        <p>{post.content}</p>
      ) : (
        <p>
          {post.content?.length > 150
            ? post.content.slice(0, 150) + "..."
            : post.content}
        </p>
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
  const [expandedPosts, setExpandedPosts] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Toggle Read More / Show Less
  const toggleExpand = (index) => {
    setExpandedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  // ✅ Fetch Blogs from Backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        // 👉 Replace with your real API endpoint
        const response = await axios.get("http://localhost:5000/api/blogs");

        // Assuming backend returns array of blog objects:
        // [
        //   { _id, title, content, createdAt, author }
        // ]
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
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

      {loading ? (
        <p className="loading">Loading blogs...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : blogs.length === 0 ? (
        <p className="no-blogs">No blog posts found.</p>
      ) : (
        <div className="blog-grid">
          {blogs.map((post, index) => (
            <BlogPost
              key={post._id || index}
              post={post}
              isExpanded={expandedPosts.has(index)}
              onToggle={() => toggleExpand(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Blog;
