import React from 'react';
import logo from './logo.svg';
import './App.css';
import paints from  "./paints.json"
function App() {
  console.log(paints)
  
  function rgb(rgba){
    return `rgb(${rgba.slice(0, 3).join(",")})`
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to color-schemer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {paints.map(
            paint => <li key={paint._id} class={paint.name}><font color = {rgb(paint.rgba)}>{paint.name}</font></li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
