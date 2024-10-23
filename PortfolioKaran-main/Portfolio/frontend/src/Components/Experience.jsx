import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    const sectionName = "Experience"; // Title of the section
    const resumeExperience = [
      {
        title: "React Developer - Internship",
        company: "SAIYLI",
        years: "May 2024 - Jul 2024",
        mainTech: ["Socket.IO", "JavaScript", "Node.js"],
        technologies: [
          "Real-time Communication",
          "Event-driven Architecture",
          "Cart Management System",
        ],
      },
      {
        title: "React Developer - Internship",
        company: "WHiLE",
        years: "Aug 2023 - Oct 2023",
        mainTech: ["React", "JavaScript", "CSS"],
        technologies: [
          "React Components",
          "User Experience Optimization",
          "Collaborative Development",
        ],
      },
    ];

    const work = resumeExperience.map((work, i) => {
      const mainTechnologies = work.mainTech.map((technology, i) => (
        <Badge
          pill
          className="bg-purple-700 text-white mr-2 mb-2 shadow-lg"
          key={i}
        >
          {technology}
        </Badge>
      ));

      const technologies = work.technologies.map((technology, i) => (
        <Badge
          pill
          className="bg-purple-600 text-white mr-2 mb-2 shadow-lg"
          key={i}
        >
          {technology}
        </Badge>
      ));

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work bg-opacity-10"
          date={work.years}
          iconStyle={{
            background: "#6B46C1", // Darker purple for icon
            color: "#fff",
          }}
          icon={<i className="fas fa-briefcase experience-icon"></i>}
          key={i}
        >
          <div className="text-left mb-2">{mainTechnologies}</div>

          <h3 className="text-lg font-semibold text-purple-200">{work.title}</h3>
          <h4 className="text-md font-light text-purple-300">{work.company}</h4>
          <div className="mt-2">{technologies}</div>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" className=" text-white pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="text-3xl font-bold text-center mb-5">{sectionName}</h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#6B46C1",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
