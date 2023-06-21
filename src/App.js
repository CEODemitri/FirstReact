// import logo from './###.jpg';
import './App.css';
import HomePage from './components/homepage';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <h1 id="title">AstroNaut Demitri</h1>
        </header>
        <body>
          <HomePage />
          <HomePage name="Demitri" prince="Christian"/>
        </body>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
