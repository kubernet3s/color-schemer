// import paints from "../paints.json"
import React from "react"
// import complementLocator from "./complementaryColors"

const PaintItem = ({scheme, schemeChange, paint}) => {
    function rgb(rgba){
        return `rgb(${rgba.slice(0, 3).join(",")})`
    }    

    let PaintItem =
        <li key={paint._id} className={paint.name}>
            <span 
                onClick={() => schemeChange([...scheme, paint])}
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