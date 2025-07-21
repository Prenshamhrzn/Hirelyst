import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/FeaturedJobs.css"; // Create this file for styling

const FeaturedJobs = ({ jobs }) => {
  const sampleJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Deerwalk Inc.",
      location: "Kathmandu",
      type: "Remote",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Leapfrog Technology",
      location: "Lalitpur",
      type: "Hybrid",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Cotiviti Nepal",
      location: "Kathmandu",
      type: "On-site",
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "Fusemachines",
      location: "Remote (Nepal)",
      type: "Remote",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudFactory",
      location: "Hybrid - Kathmandu",
      type: "Hybrid",
    },
  ];

  const jobList = jobs || sampleJobs;

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="featured-section">
      <h2 className="featured-title"> Featured Jobs</h2>
      <Slider {...settings}>
        {jobList.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-card-content">
              <h3>{job.title}</h3>
              <p className="company-name">{job.company}</p>
              <p className="location">{job.location}</p>
              <p className={`job-type ${job.type.toLowerCase()}`}>{job.type}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedJobs;
