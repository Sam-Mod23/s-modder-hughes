import { Link } from "react-scroll";
import linked from "../images/LI-In-Bug.png";
import github from "../images/GitHub-Mark-64px.png";
import email from "../images/email3.png";

const Footer = () => {
  return (
    <footer id="app-footer" className="App-footer">
      <div>
        <a href="https://www.linkedin.com/in/sam-modder-hughes/">
          <img className="socialLinks" alt="LinkedIn logo" src={linked}></img>
        </a>
        <a href="https://github.com/Sam-Mod23">
          <img className="socialLinks" alt="gitHub logo" src={github}></img>
        </a>
        <a href="mailto:sj.modderhughes@gmail.com">
          <img className="socialLinks" alt="email logo" src={email}></img>
        </a>
      </div>
      <Link
        to="app-header"
        spy={true}
        smooth={true}
        duration={500}
        className="toTop"
      >
        Back to the top...
      </Link>
      <p>© Copyright Sam Modder-Hughes 2021. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
