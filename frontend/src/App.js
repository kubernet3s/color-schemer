import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColourWheel from 'react-colour-wheel'

function App() {
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
      </header>
      <ColourWheel
        radius={200}
        padding={10}
        lineWidth={50}
        onColourSelected={(rgb) => this.setState({ rgb })}
        onRef={ref => (this.colourWheel = ref)}
        spacers={{
          colour: '#FFFFFF',
          shadowColour: 'grey',
          shadowBlur: 5
        }}
        preset
        presetColour={this.state.rgb}
        animated
      />
    </div>
  );
}

export default App;
