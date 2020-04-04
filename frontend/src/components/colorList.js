import paints from  "../paints.json"
import React from 'react';
// import complementLocator from "./complementaryColors"
import PaintItem from "./PaintItem"


function ColorList(props){
    let scheme = props.scheme
    let schemeChange = props.schemeChange
    return(
        <div>
        <ul>
        {paints.map(
            paint => PaintItem(paint, schemeChange, scheme)
        )}
      </ul>
      </div>
    )
}

export default ColorList