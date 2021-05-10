import React, { Component } from "react";
import { Element } from "react-scroll";
import NCNewsBE from "./Project-Cards/NC-News-BE";
import NCNewsFE from "./Project-Cards/NC-News-FE";
import Blurble from "./Project-Cards/Blurble";
import DemoPopUp from "./Project-Cards/Demo-Pop-Up";

export default class Projects extends Component {
  state = {
    demoPop: false
  };

  togglePop = () => {
    this.setState({
      demoPop: !this.state.demoPop
    });
  };

  render() {
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
        {this.state.demoPop ? <DemoPopUp toggle={this.togglePop} /> : null}
        <section className="project-collection">
          <NCNewsBE />
          <NCNewsFE />
          <Blurble togglePop={this.togglePop} />
        </section>

        <section className="project-summary">
          All of these projects were completed following agile practices,
          including pair programming and test driven development. Blurble was
          ran as a 5 member project, with a research phase, planning phase with
          Figma wireframe designs and daily stand-ups & scrums throughout
          development.
        </section>
      </Element>
    );
  }
}
