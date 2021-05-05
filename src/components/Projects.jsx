import React from "react";
import { Element } from "react-scroll";
import news from "../images/nc-news.jpg";

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
      <section className="project-collection">
        <div
          className="project-card"
          style={{ backgroundImage: `url(${news})` }}
        >
          NC-News
        </div>
        <div
          className="project-card"
          style={{ backgroundImage: `url(${news})` }}
        >
          Blurble
        </div>
      </section>
    </Element>
  );
};

export default Projects;
