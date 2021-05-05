import Scroll from "react-scroll";

import "./App.css";
import AboutMe from "./text/About-me.jsx";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Logo from "./images/Logo.png";

const { Link } = Scroll;

function App() {
  return (
    <div className="App">
      <Header />
      <section className="photo-quicklinks">
        <img className="photo" alt="Sam M-H" src={Logo}></img>
        <div>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="work"
          >
            A look at my work...
          </Link>

          <Link href="#" className="soundtrack">
            Something different...
          </Link>
        </div>
      </section>
      <AboutMe className="aboutMe" />

      <Projects />
    </div>
  );
}

export default App;
