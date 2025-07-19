import React from "react";
import "../css/BrowseJobs.css";

const jobs = [
  {
    id: 1,
    title: "React Developer",
    company: "YoungInnovations",
    location: "Kathmandu",
    type: "On-site",
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Hamro Patro",
    location: "Lalitpur",
    type: "Hybrid",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Fusemachines Nepal",
    location: "Remote (Nepal)",
    type: "Remote",
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "EB Pearls",
    location: "Kathmandu",
    type: "On-site",
  },
  {
    id: 5,
    title: "QA Analyst",
    company: "CloudFactory",
    location: "Remote",
    type: "Remote",
  },
  {
    id: 6,
    title: "UI/UX Intern",
    company: "Veda App",
    location: "Lalitpur",
    type: "Hybrid",
  },
  {
    id: 7,
    title: "Digital Marketing Officer",
    company: "SastoDeal",
    location: "Kathmandu",
    type: "On-site",
  },
  {
    id: 8,
    title: "Backend Developer (Node.js)",
    company: "TechKraft",
    location: "Remote",
    type: "Remote",
  },
  {
    id: 9,
    title: "Product Designer",
    company: "Vianet",
    location: "Hybrid (Lalitpur)",
    type: "Hybrid",
  },
  {
    id: 10,
    title: "Customer Support Executive",
    company: "Daraz",
    location: "Kathmandu",
    type: "On-site",
  },
];

const BrowseJobs = () => {
  return (
    <section className="browse-section">
      <h2 className="browse-heading">Browse Job Categories</h2>
      <div className="browse-jobs-container">
        {jobs.map((job) => (
          <div key={job.id} className="browse-job-card">
            <h3>{job.title}</h3>
            <p className="company-name">{job.company}</p>
            <p className="location">{job.location}</p>
            <span className={`job-type ${job.type.toLowerCase()}`}>
              {job.type}
            </span>
            <button className="apply-btn">Apply</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseJobs;
