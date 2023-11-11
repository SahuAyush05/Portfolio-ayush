import "./heroImage.css";
import { Link } from "react-router-dom";
import React from "react";
import Image1 from "../assets/img5.jpg";
const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Image1} alt="myimg" />
      </div>
      <div className="content">
        <p>Hi, I'm a Front-end Developer and a Competitive Programmer</p>
        <h1>React Developer</h1>
        <div>
          <Link to={"/Project"} className="btn">
            Projects
          </Link>
          <Link to={"/Contact"} className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
