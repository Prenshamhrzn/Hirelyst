import React from "react";
import Banner from "./Banner";
import Features from "./Features";
import Howitworks from "./HowItWorks";
import BrowseJobs from "./BrowseJobs";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedJobs />
      <BrowseJobs />
      <Features />
      <Howitworks />
    </div>
  );
};

export default Home;
