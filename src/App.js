// import logo from './###.jpg';
import './App.css';
// ADD NEW COMPONENTS> THIS IS ONLY A REMINDER TO CHANGE
import HomePage from './components/homepage';

function App() {
  return (
    <>
      <div className="App">
       <header>
        <nav>
          <a href="#">Journey</a>
          <a href="#">Equipment</a>
          <a href="#">Travel Log</a>
        </nav>
        <div className="hero-section">
          <div className="background">
            <div className="left-hero">
              <h1>
                <p>A Trip Through The Cosmos</p>
                <p className="perfect">All <span>Aboard</span></p>
                <p>Astronaut Demitri</p>
              </h1>
            </div>
            <div className="right-hero"></div>
          </div>
        </div>
       </header>
      </div>
    </>
  );
}

export default App;
