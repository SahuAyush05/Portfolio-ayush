import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2";
import Work from "../Components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECTS" text="SOME OF MY MOST RECENT WORKS" />
      <Work/>
      <Footer />
    </div>
  );
};

export default Project;
