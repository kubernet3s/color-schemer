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
        <div className="flex justify-center space-between w-80percent margin-default">
            <div className="flex column w-45percent margin-5">
                <h2>Army Painter Colors</h2>
                <ColorDropdown scheme={scheme} schemeChange={schemeChange}/>
                {/* {options} */}
            </div>
            <ColorSchemeView className="margin-5 border-1" scheme = {scheme} schemeChange={schemeChange}/>
      </div>
    )
}

export default ColorList