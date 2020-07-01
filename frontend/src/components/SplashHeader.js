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
        <div className="flex bg-red justify-center align-center">
            <h1 
                className="f-50 padding-20 bg-lightgrey w-fit-content white" 
            >
                Welcome to&nbsp;
                <span className="pointer bold txt-stroke-white" style={{ color : colorString }} onClick={resetRandomColor}>
                    Color Schemer!
                </span>
            </h1>
                <p className="white">
                    ← Click Me<br/>
                    The current color is:<br/>
                    {colorName}
                </p>
        </div>
      );
    
}

export default SplashHeader;