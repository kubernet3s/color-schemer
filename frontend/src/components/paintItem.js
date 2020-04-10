// import paints from "../paints.json"
import React from "react"
// import complementLocator from "./complementaryColors"

const PaintItem = ({scheme, schemeChange, paint}) => {
    // let [hidden, toggleHidden] = useState(true)
    debugger
    function rgb(rgba){
        return `rgb(${rgba.slice(0, 3).join(",")})`
    }    
    // const complement = complementLocator(paint, paints)
    const colorArr = paint.rgba.slice(0,3)

    function addColor(colorArr){
        schemeChange([...scheme, colorArr])
        console.log(scheme)
    }

    // useEffect(()=>{
    //     scheme.push(colorArr)
    //     schemeChange(scheme)
    //     console.log(scheme)
    // }, [colorArr])

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