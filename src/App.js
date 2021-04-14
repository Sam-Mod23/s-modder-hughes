import './App.css';
import AboutMe from './text/About-me.jsx';
import Header from './components/Header';
import Projects from './components/Projects';
import Logo from './images/Logo.png';
import Autumn from './images/Autumn.jpg';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <section style={{ 'background-color': '#374550' }}></section> */}
      <section className='break'></section>
      <body className='Body'>
        <img className='photo' alt='Sam M-H' src={Logo}></img>
        <AboutMe className='aboutMe' />
        {/* <img className='background' alt='autumn' src={Autumn}></img> */}
        <Projects />
      </body>
    </div>
  );
}

export default App;
