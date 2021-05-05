import "./App.css";
import AboutMe from "./text/About-me.jsx";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Logo from "./images/Logo.png";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="photo-quicklinks">
        <img className="photo" alt="Sam M-H" src={Logo}></img>
        <div>
          <a href="" className="work" style={{ margin: "1rem" }}>
            A look at my work...
          </a>
          <a className="soundtrack" style={{ margin: "1rem" }}>
            Something different...
          </a>
        </div>
      </section>
      <AboutMe className="aboutMe" />

      <Projects />
    </div>
  );
}

export default App;
