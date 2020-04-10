import paints from  "../paints.json"
import React, {useState, useEffect} from 'react';
import PaintItem from "./PaintItem"
import ColorSchemeView from "./ColorSchemeView"
import complementCalculator from "./complementaryColors"

const ColorList = () => {
    let [scheme, schemeChange] = useState([]);
    // useEffect(() => {
    //     schemeChange(scheme)
    // }, [scheme])
    return(
        <div class="flex">
            <ul>
                {paints.map(
                    paint => 
                    <PaintItem 
                    scheme = {scheme} 
                    schemeChange = {schemeChange}
                    paint = {{...paint, complement: complementCalculator(paint, paints)}}
                    />
                )}
            </ul>
            <ColorSchemeView scheme = {scheme}/>
      </div>
    )
}

export default ColorList