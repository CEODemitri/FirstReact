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

export default App;
