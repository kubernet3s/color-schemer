import paints from "../paints.json"
import React, {useState} from "react"
import complementLocator from "./complementaryColors"

function PaintItem(paint, schemeChange, scheme){
    let [hidden, toggleHidden] = useState(true)

    function rgb(rgba){
        return `rgb(${rgba.slice(0, 3).join(",")})`
    }    
    const complement = complementLocator(paint, paints)
    const colorArr = paint.rgba.slice(0,3)

    function addColor(colorArr){
        scheme.push(colorArr)
        schemeChange(scheme)
    }

    let PaintItem =
        <li key={paint._id} className={paint.name}>
            <span 
                onClick={() => addColor(colorArr)}
                style= {{color: rgb(paint.rgba)}}>Paint: {paint.name}
            </span>
        </li>
    ;
    // let ComplementItem = hidden ? null :
    //     <span 
    //         style= {{color: rgb(complement.rgba)}}>Complement: {complement.name}
    //     </span>
    // ;

    return(
        <>
        {PaintItem}
        <br/>
        {/* {ComplementItem}
        <br/> */}
        </>
    )
}

export default PaintItem