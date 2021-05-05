import React from "react";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element id="projects" name="projects" className="projects">
      <header
        style={{
          color: "#8E3829",
          padding: "0px 0px",
          margin: "4px 0px",
          "text-align": "center"
        }}
      >
        Some of my work
      </header>
    </Element>
  );
};

export default Projects;
