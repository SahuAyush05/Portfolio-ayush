import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_Container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>I.E.T. Lucknow</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9918490897
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              sahu9918as05@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am an experienced front-end developer proficient in React.js
            with a strong grasp of DSA and competitive
            programming.
          </p>
          <div className="social">
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
