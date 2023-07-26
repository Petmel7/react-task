// import logo from './logo.svg';
import './App.css';
// import './Card.css';
// Приклад імпорту TypeScript модуля у Node.js
// const { someFunction } = require('./some-module');

import { Card } from './components/Card';
import "./shared/styles/styles.scss";

function App() {

  return (
    <div className="App">
      <Card isCardHovered={true} />
    </div>
  );
}

export default App;
