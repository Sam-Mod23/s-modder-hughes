import "./App.css";
import AboutMe from "./components/About-me.jsx";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Soundtrack from "./components/Soundtrack";
import PhotoQuicklinks from "./components/Photo-quicklinks";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <PhotoQuicklinks />
      <AboutMe />
      <Projects />
      <Soundtrack />
      <div>
        {" "}
        <Link
          to="app-header"
          spy={true}
          smooth={true}
          duration={500}
          className="toTop"
          style={{ color: "black" }}
        >
          Back to the top...
        </Link>
      </div>
    </div>
  );
}

export default App;
