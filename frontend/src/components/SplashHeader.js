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
        <div className="flex">
            <h1 
                className="f-50 padding-20 bg-lightgrey w-fit-content margin-default border-1 border-rad-15 red border-red" 
            >
                Welcome to&nbsp;
                <span className="pointer bold txt-stroke-white" style={{ color : colorString }} onClick={resetRandomColor}>
                    Color Schemer!
                </span>
            </h1>
            <h2>Click "Color Schemer" to change the title's color to one of the Army Painter colors</h2>
            <h2>The current color is:<br/> {colorName}</h2>
        </div>
      );
    
}

export default SplashHeader;