import React from "react"
import SchemeSwatch from "./SchemeSwatch"


const ColorSchemeView = ({scheme}) => {
    let schemeView = scheme.length ?
        scheme.map(
            paint => SchemeSwatch(paint);
        )
       :
       null
    ;
    return(
        <div>
            {schemeView}
        </div>
    );
}

export default ColorSchemeView;