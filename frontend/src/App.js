import React, {useState} from 'react';
import './App.css';
import './reset.css'
import SplashHeader from './components/SplashHeader'
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
    
  let [randomColor, setRandomColor] = useState(colorsObj[1]);
  // let randomColor = colorsObj[randomId()].rgba;
  let colorString = `rgba(${randomColor.rgba.join(",")})`;
  let colorName = randomColor.name
  // work this all into a hook so that state is updated and rerenders appropriately
  let resetRandomColor = () =>{
    const newId = randomId();
    setRandomColor(colorsObj[newId]);
    colorString = `rgba(${randomColor.rgba.join(",")})`;
  }
  return (
    <div className="App vh-100percent">
      <SplashHeader/>
      <Interface/>
    </div>
  );
}

export default App;
