import paints from "../paints.json"
import React, {useState} from "react"
import complementLocator from "./complementaryColors"

function PaintItem(paint){
    let [hidden, toggleHidden] = useState(true)

    function rgb(rgba){
        return `rgb(${rgba.slice(0, 3).join(",")})`
    }    

    const complement = complementLocator(paint, paints)


    let PaintItem =
        <li key={paint._id} className={paint.name}>
            <span 
                onClick={() => toggleHidden(!hidden)}
                style= {{color: rgb(paint.rgba)}}>Paint: {paint.name}
            </span>
        </li>
    ;
    let ComplementItem = hidden ? null :
        <li key={complement._id} className={complement.name}>
            <span 
                style= {{color: rgb(complement.rgba)}}>Complement: {complement.name}
            </span>
        </li>
    ;

    return(
        <>
        {PaintItem}
        <br/>
        {ComplementItem}
        <br/>
        </>
    )
}

export default PaintItem