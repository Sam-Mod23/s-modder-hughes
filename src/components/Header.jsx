import React from "react";
import linked from "../images/LI-In-Bug.png";
import github from "../images/GitHub-Mark-64px.png";
import email from "../images/email3.png";

const Header = () => {
  return (
    <header id="app-header" className="App-header">
      Sam Modder-Hughes
      <div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/sam-modder-hughes/"
        >
          <img className="socialLinks" alt="LinkedIn logo" src={linked}></img>
        </a>
        <a rel="noreferrer" target="_blank" href="https://github.com/Sam-Mod23">
          <img className="socialLinks" alt="gitHub logo" src={github}></img>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:sj.modderhughes@gmail.com"
        >
          <img className="socialLinks" alt="email logo" src={email}></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
