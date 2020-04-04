import React, {useState} from "react"
import ColorList from "./ColorList"
import ColorSchemeView from "./ColorSchemeView"

function Interface(){
    let [scheme, schemeChange] = useState([])
    const props = {
        "scheme" : scheme,
        "schemeChange" : schemeChange
    }

    return(
        <>
        {ColorList(props)}
        {ColorSchemeView(props)}
        </>
    )
}

export default Interface