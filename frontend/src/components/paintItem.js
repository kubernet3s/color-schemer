import paints from "../paints.json"
import React, {useState} from "react"
import complementLocator from "./complementaryColors"

function PaintItem(paint){
    let [hidden, toggleHidden] = useState(true)

    function rgb(rgba){
        debugger
        return `rgb(${rgba.slice(0, 3).join(",")})`
    }    

    const complement = complementLocator(paint, paints)

    debugger

    let PaintItem =
        <li key={paint._id} class={paint.name}>
            <span 
                onClick={() => toggleHidden(!hidden)}
                style= {{color: rgb(paint.rgba)}}>{paint.name}
            </span>
        </li>
    ;

    let ComplementItem = paint.hidden ? null :
        <li key={complement._id} class={complement.name}>
            <span 
                style= {{color: rgb(complement.rgba)}}>{complement.name}
            </span>
        </li>
    ;

    return(
        <>
        <PaintItem/>
        <br/>
        <ComplementItem/>
        </>
    )
}

export default PaintItem