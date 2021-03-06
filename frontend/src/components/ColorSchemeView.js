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
    const schemeViewStyle = scheme.length ? "border-1 border-rad-15 border-red bg-lightyellow padding-10" : "";
    return(
        <div className="flex column w-45percent h-fit red">
            <h2 className="f-20 padding-10">Your Scheme</h2>
            <ul className={schemeViewStyle}>
                {schemeView}
            </ul>
        </div>
    );
}

export default ColorSchemeView;