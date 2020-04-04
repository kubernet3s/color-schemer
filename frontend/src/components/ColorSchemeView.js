import React, {useState} from "react"


function ColorSchemeView(props) {
    debugger
    let scheme = props.scheme;
    let schemeView = scheme.length ? 
        <div>
        {scheme.map(
            color => 
            <div 
                className="swatch" 
                style= {{background: "black"}}/>
        )}
        </div>
        :
        null
    ;

    return(
        schemeView
        // <br/>
    );
}

export default ColorSchemeView;