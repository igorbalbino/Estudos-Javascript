import logo from './logo.svg';
import React from "react";
import './App.css';

function App() {
  var a = [1,2,3,4,5];
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <React.Fragment>
        <ul className="list-group">
          {a.map(b => (
            <li className="list-group-item list-group-item-primary" />
          ))}
        </ul>
      </React.Fragment>
      </header>
    </div>
  );
}

export default App;
