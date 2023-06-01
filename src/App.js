// import logo from './###.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>DEMITRI ECHOLS</h1>
          <p>One of One</p>
        </header>
      </div>
      <div>
        <h1>Artworks</h1>
          <div className="place">
            <img src={ require('./pastel.jpg') } />
          </div>
      </div>

    </div>
  );
}

function HomePage() {
  return (
    <>
      <header>
        <div className="hero-text">
          <h1></h1>
          <h2></h2>
          <p></p>
        </div>
        <div className="head-image">
          <img />
          <img />
          <img />
          <img />
        </div>
      </header>
      <body>
        <div className="section-00"></div>
        <div className="section-01"></div>
        <div className="section-02"></div>
      </body>
      <footer>
        <div className="half-00"></div>
        <div className="half-01"></div>
      </footer>
    </>
  ); 
}

function NavBar() {
  return (
    <>
      <nav>
      <img />
      <ul className="nav-items">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </nav>
    </>
  );
}

export default App;
