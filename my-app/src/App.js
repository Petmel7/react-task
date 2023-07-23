import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
// import { Sidebar } from './components/Sidebar';

function App() {

  // const first : number = 1;
  // const second: number = 2;
  
  // const sum = (a, b) => a + b;

  return (
    <div className="App">
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>GoIt</h1>
      <Sidebar/>
    </div>
  );
}

export default App;
