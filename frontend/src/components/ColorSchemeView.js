import React from "react"
import SchemeSwatch from "./SchemeSwatch"


const ColorSchemeView = ({scheme, schemeChange}) => {
    let schemeView = scheme.length ?
        scheme.map(
            paint => <SchemeSwatch className="border-1" paint={paint} scheme={scheme} schemeChange={schemeChange}/>
        )
       :
       null
    ;
    return(
        <div className="flex column w-45percent border-1 border-rad-15">
            <h2>Your Scheme</h2>
            {schemeView}
        </div>
    );
}

export default ColorSchemeView;