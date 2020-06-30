import React from 'react';
import './App.css';
import './reset.css'
import Interface from './components/Interface'
import paints from './paints.json'


function App() {  
  let colorsObj = {}

  paints.forEach(paint => {
    colorsObj[paint._id] = paint
  });

  let randomId = () => (
    Math.floor(Math.random() * paints.length + 1)
  )

  let randomColor = {color: colorsObj[randomId()].rgba}
  console.log(randomColor)

  return (
    <div className="App vh-100percent">
        <h1 className="f-30 padding-20" style={randomColor}>
          Welcome to Color Schemer!
          
        </h1>
      <Interface/>
    </div>
  );
}

export default App;
