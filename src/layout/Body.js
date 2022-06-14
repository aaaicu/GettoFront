import React from "react";
import logo from './../resource/logo.svg';
import './Body.css';
import Test from './../component/lotto/Test';

function Body() {
  return (
    <div className="Body">
      <header className="Main-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Getto!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    <Test />
    </div>
  );
}

export default Body;
