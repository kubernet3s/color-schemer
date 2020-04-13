import paints from  "../paints.json"
import React, {useState} from 'react';
import PaintItem from "./PaintItem"
import ColorSchemeView from "./ColorSchemeView"
import complementCalculator from "./complementaryColors"

const ColorList = () => {
    let [scheme, schemeChange] = useState([]);

    return(
        <div className="flex justify-center">
            <ul>
                <h2>Army Painter Colors</h2>
                {paints.map(
                    paint => 
                    <PaintItem 
                    scheme = {scheme} 
                    schemeChange = {schemeChange}
                    paint = {{...paint, complement: complementCalculator(paint, paints)}}
                    />
                )}
            </ul>
            <ColorSchemeView scheme = {scheme} schemeChange={schemeChange}/>
      </div>
    )
}

export default ColorList