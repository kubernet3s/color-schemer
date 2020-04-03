import paints from  "../paints.json"
import React from 'react';
// import complementLocator from "./complementaryColors"
import PaintItem from "./paintItem"

// function rgb(rgba){
//     return `rgb(${rgba.slice(0, 3).join(",")})`
// }

// function displayComplement(paint, paints){
//     alert(complementLocator(paint.rgba, paints))
// }

function ColorList(){

    

    return(
        <ul>
        {paints.map(
          paint => PaintItem(paint)
        )}
      </ul>
    )
}

export default ColorList