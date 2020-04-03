import paints from  "../paints.json"
import React from 'react';
import complementLocator from "./complementaryColors"

function rgb(rgba){
    return `rgb(${rgba.slice(0, 3).join(",")})`
}

function displayComplement(paint, paints){
    alert(complementLocator(paint.rgba, paints))
}

function ColorList(){

    

    return(
        <ul>
        {paints.map(
          paint => <li key={paint._id} class={paint.name}>
            <span 
                onClick={() => displayComplement(paint, paints)}
                style= {{color: rgb(paint.rgba)}}>{paint.name}
            </span>
          </li>
        )}
      </ul>
    )
}

export default ColorList