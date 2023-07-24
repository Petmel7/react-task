import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
// Приклад імпорту TypeScript модуля у Node.js
// const { someFunction } = require('./some-module');

// import { Sidebar } from './components/Sidebar';

function App() {

  // const func = (value) => {
  //   console.log("Helo", value)
  // }

  const condition = false

  return (
    <div className="App">

      {condition ? <h2>True</h2> : <h2>False</h2>}
      
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

      {/* <h1>GoIt</h1>
      <Sidebar
        text="Sidebar"
        number={7}
        dog="Tomik"

        testObject={{
          name: "Petro",
          lastName: "Melychyn"
        }}

        testArray={[1, 2, 3, 4, 5]}
        testFunc={func}
        callBackFunc={(e) => func(e.target)}
      /> */}
    </div>
  );
}

export default App;
