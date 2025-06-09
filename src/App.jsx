import './App.css';

import { HashRouter, Routes, Route } from "react-router-dom";

import About from './components/About';
import Contact from './components/Contact';
import ContentBanner from './components/ContentBanner';
import Footer from './components/Footer';
import NavBanner from './components/NavBanner';
import Projects from './components/Projects';

// individual, re-used element for the header //
function Header() {
  return (
    <header>
      <NavBanner />
    </header>
  );
}

// reusable layout wrapper //
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

// each individual page //
const HomePage = () => (
  <Layout>
    <ContentBanner title="Welcome!" />
  </Layout>
);

const AboutPage = () => (
  <Layout>
    <About />
  </Layout>
);

const ProjectsPage = () => (
  <Layout>
    <Projects />
  </Layout>
);

const ContactPage = () => (
  <Layout>
    <Contact />
  </Layout>
);

// renders the entire structure of the app & its' other pages //
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
