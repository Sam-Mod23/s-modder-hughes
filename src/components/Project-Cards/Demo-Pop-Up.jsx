import React, { Component } from "react";

export default class DemoPopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="demoPop">
        <div className="demoPop-content">
          <div
            style={{ "align-self": "flex-end", "font-size": "large" }}
            className="demo-close"
            onClick={this.handleClick}
          >
            Close
          </div>
          <iframe
            className="demo-vid"
            src="https://www.youtube.com/embed/wXuEF3AnYfM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}
