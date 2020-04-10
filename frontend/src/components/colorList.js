import paints from  "../paints.json"
import React, {useState, useEffect} from 'react';
import PaintItem from "./PaintItem"
import ColorSchemeView from "./ColorSchemeView"

const ColorList = () => {
    let [scheme, schemeChange] = useState([]);
    // useEffect(() => {
    //     schemeChange(scheme)
    // }, [scheme])
    debugger
    paints.forEach(element => {
        console.log(element)
    });
    return(
        <div>
            <ul>
                {paints.map(
                    paint => 
                    <PaintItem 
                    scheme = {scheme} 
                    schemeChange = {schemeChange}
                    paint = {paint}/>
                )}
            </ul>
            <ColorSchemeView scheme = {scheme}/>
      </div>
    )
}

export default ColorList