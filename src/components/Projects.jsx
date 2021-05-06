import React from "react";
import { Element } from "react-scroll";

import blurble from "../images/blurble.jpg";
import NCNewsBE from "./Project-Cards/NC-News-BE";
import NCNewsFE from "./Project-Cards/NC-News-FE";

const Projects = () => {
  return (
    <Element id="projects" name="projects" className="projects">
      <h1
        style={{
          color: "#8E3829",
          padding: "0px 0px",
          margin: "4px 0px",
          "text-align": "center"
        }}
      >
        Projects
      </h1>
      <section className="project-collection">
        <NCNewsBE />
        <NCNewsFE />
        <div
          href="#"
          className="project-card"
          style={{ backgroundImage: `url(${blurble})` }}
        >
          <h2 className="project-card-header">Blurble</h2>
        </div>
      </section>
      <body className="project-summary">
        All of these projects were completed following agile practices,
        including pair programming and test driven development. Blurble was ran
        as a 5 member project, with a phase for research, wireframe designs and
        daily morning stand-ups throughout.
      </body>
    </Element>
  );
};

export default Projects;
