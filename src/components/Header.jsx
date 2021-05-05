import React from "react";
import linked from "../images/LI-In-Bug.png";
import github from "../images/GitHub-Mark-64px.png";

const Header = () => {
  return (
    <header className="App-header">
      Sam Modder-Hughes
      <div>
        <a href="https://www.linkedin.com/in/sam-modder-hughes/">
          <img className="socialLinks" alt="LinkedIn logo" src={linked}></img>
        </a>
        <a href="https://github.com/Sam-Mod23">
          <img className="socialLinks" alt="gitHub logo" src={github}></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
