import "./App.css";

import AboutMe from "./components/About-me.jsx";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Soundtrack from "./components/Soundtrack";
import PhotoQuicklinks from "./components/Photo-quicklinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
        <PhotoQuicklinks />
      </header>
      <AboutMe />
      <Projects />
      <Soundtrack />
      <Footer />
    </div>
  );
}

export default App;
