import React from "react"
import SchemeSwatch from "./SchemeSwatch"


const ColorSchemeView = ({scheme, schemeChange}) => {
    let schemeView = scheme.length ?
        scheme.map(
            paint => <SchemeSwatch paint={paint} scheme={scheme} schemeChange={schemeChange}/>
        )
       :
       null
    ;
    return(
        <div className="flex column w-50percent">
            <h2>Your Scheme</h2>
            {schemeView}
        </div>
    );
}

export default ColorSchemeView;