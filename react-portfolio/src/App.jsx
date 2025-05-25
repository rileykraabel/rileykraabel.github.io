import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import ContentBanner from './components/ContentBanner';
import Footer from './components/Footer';
import NavBanner from './components/NavBanner';
import Projects from './components/Projects';

function Header() {
  return (
    <header>
      <NavBanner />
    </header>
  );
}

function Main() {
  return (
    <div className="main-content">
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ContentBanner />
      <Header />
      <Main />
    </div>
  );
}

export default App;
