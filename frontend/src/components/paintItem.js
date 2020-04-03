import React, {useState} from "react"

function paintItem(paint){
    []
    return(
    <li key={paint._id} class={paint.name}>
        <span 
            onClick={() => displayComplement(paint, paints)}
            style= {{color: rgb(paint.rgba)}}>{paint.name}
        </span>
    </li>)
}

export default paintItem