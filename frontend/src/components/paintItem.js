// import paints from "../paints.json"
import React from "react"
// import complementLocator from "./complementaryColors"

const PaintItem = ({scheme, schemeChange, paint}) => {
    // function rgb(rgba){
    //     return `rgb(${rgba.slice(0, 3).join(",")})`
    // }    

    let PaintItem =
        <li key={paint._id} className="pointer flex align-center">
            <span 
                onClick={() => schemeChange([...scheme, paint])}>Paint: {paint.name}
            </span>
            <div className="box-10 margin-left-10 border-1" style={{background: `rgba(${paint.rgba.join(",")})`}}></div>
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