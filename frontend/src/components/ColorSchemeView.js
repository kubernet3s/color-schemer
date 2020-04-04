import React, {useState, useEffect} from "react"


function ColorSchemeView(props) {
    debugger
    let schemeView = displayedColors ? 
        <div>
        {displayedColors.map(
            color => 
            <div 
                className="swatch" 
                style= {{background: "black"}}
            />
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