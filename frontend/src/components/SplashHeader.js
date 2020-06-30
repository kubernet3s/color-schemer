import React, {useState} from 'react';
import paints from "../paints.json"

const SplashHeader = () => {
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
        <>
        <h1 className="f-30 padding-20 bg-lightgrey w-fit-content margin-default border-rad-15" onClick={resetRandomColor}>
            Welcome to <span className="pointer bold txt-stroke-white" style={{ color : colorString }}>Color Schemer!</span>
        </h1>
        <h2>Click "Color Schemer" to change the title's color to one of the Army Painter colors</h2>
        <h2>The current color is:<br/> {colorName}</h2>
        </>
      );
    
}

export default SplashHeader;