import React from "react";
import "./Ds.css";
import Typewriter from "typewriter-effect";

const Description = () => {
  return (
    <div className="flex flex-col h-screen px-10 py-24 align-middle justify-center">
      <h1 className=" gradient-text py-12 text-7xl px-8s font-medium text- ">
        One pixel at a time
      </h1>
      <p className="text-lg gradient2-text">
      <Typewriter
  options={{
    strings: [
      "<strong>Welcome to my Digital Playground!</strong>: Dive into my world of code, innovation, and design—where every line of code shapes immersive experiences.",
      "<strong>Building the Future:</strong> From GrievEase (a transparent complaint portal) to RealTime-Whiteboard (a collaborative platform), I create impactful digital solutions.",
      "<strong>Bridging Communication Gaps:</strong> Explore my AI-powered chatbot and real-time tools, designed to simplify user interaction with cutting-edge technology.",
      "<strong>Let's Collaborate!</strong>: Connect on GitHub, LinkedIn, or drop me an email—I’m always excited to learn and innovate alongside fellow developers."
    ],
    autoStart: true,
    loop: true,
    delay: 40,
    deleteSpeed: 10,
    changeDelay: 12,
  }}
/>

      </p>
     
    </div>
  );
};

export default Description;
