import React, {useState} from 'react';
import paints from "../paints.json"

function SplashHeader(){
    let colorsObj = {}
  
    paints.forEach(paint => {
      colorsObj[paint._id] = paint
    });
    
    let randomId = () => (
      Math.floor(Math.random() * paints.length + 1)
      )
      
    let [randomColor, setRandomColor] = useState(colorsObj[1]);
    let colorString = `rgba(${randomColor.rgba.join(",")})`;
    let colorName = randomColor.name

    let resetRandomColor = () =>{
      const newId = randomId();
      setRandomColor(colorsObj[newId]);
      colorString = `rgba(${randomColor.rgba.join(",")})`;
    }
    return (
        <h1 className="f-30 padding-20" onClick={resetRandomColor}>
            Welcome to <span style={{ color : colorString }}>Color Schemer!</span>
            {colorName}
        </h1>
      );
    
}

export default SplashHeader;