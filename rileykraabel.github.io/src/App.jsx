import './App.css';

import ContentBanner from './components/ContentBanner';
import NavBanner from './components/NavBanner';

function Header() {
  return (
    <header>
      <NavBanner />
    </header>
  );
}

function Main() {
  return (
    <h1>Content will go here</h1>
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
