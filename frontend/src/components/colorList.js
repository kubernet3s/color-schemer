// import paints from  "../paints.json"
import React, {useState} from 'react';
// import PaintItem from "./PaintItem"
import ColorSchemeView from "./ColorSchemeView"
// import complementCalculator from "../functions/ComplementaryColors"
import ColorDropdown from "./ColorDropdown"

const ColorList = () => {
    let [scheme, schemeChange] = useState([]);

    // const options =
    // paints.map(
    //     paint => 
    //     <PaintItem 
    //     scheme = {scheme} 
    //     schemeChange = {schemeChange}
    //     paint = {{...paint, complement: complementCalculator(paint, paints)}}
    //     />
    // )



    return(
        <div className="flex justify-center">
            <ul>
                <h2>Army Painter Colors</h2>
            <ColorDropdown scheme={scheme} schemeChange={schemeChange}/>
                {/* {options} */}
            </ul>
            <ColorSchemeView scheme = {scheme} schemeChange={schemeChange}/>
      </div>
    )
}

export default ColorList