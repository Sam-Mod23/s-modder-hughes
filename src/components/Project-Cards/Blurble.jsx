import blurble from "../../images/blurble.jpg";

import React, { Component } from "react";

export default class Blurble extends Component {
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
      <div
        rel="noreferrer"
        href="#"
        className="project-card"
        style={{ backgroundImage: `url(${blurble})` }}
      >
        <h2 className="project-card-header">Blurble</h2>
        <p className="project-card-text">
          A book-club app for friends. Built using MongoDB and React Native.
          Having complete independence to work on this project, our team decided
          which technologies, platforms and packages to use. I worked primarily
          on the backend, exploring a completely unfamiliar database package in
          MongoDB and implementing it from the ground up.
          <p>Javascript ✦ MongoDB ✦ Mongoose ✦ Express ✦ Jest ✦ Supertest</p>
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Sam-Mod23/Blurble-Backend"
              className="project-links"
            >
              Backend repo
            </a>
            <span>
              {" | "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://blurble-project.herokuapp.com/api"
                className="project-links"
              >
                Heroku app
              </a>
            </span>
            <span>
              {" | "}
              <button onClick={this.togglePop} className="demo-button">
                Demo
              </button>
            </span>
          </p>
        </p>
      </div>
    );
  }
}
