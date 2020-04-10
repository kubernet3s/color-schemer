import React from "react"
import SchemeSwatch from "./SchemeSwatch"


const ColorSchemeView = (scheme) => {
    console.log('Color Scheme View')
    // const scheme = props.scheme
    let schemeView = scheme.length ?
        scheme.map(
            color => SchemeSwatch(color)
        )
       :
       null
    ;
    
    return(
        <div>
            {schemeView}
            {SchemeSwatch()}
        </div>
    );
}

export default ColorSchemeView;