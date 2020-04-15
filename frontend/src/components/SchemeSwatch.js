import React from "react"

const SchemeSwatch = ({paint, scheme, schemeChange}) => {
    const complement = paint.complement
    const swatchIndex = scheme.indexOf(paint)

    function removeSwatch(){
        const newScheme = scheme
        newScheme.splice(swatchIndex, 1)
        schemeChange([...newScheme])
    }
    debugger
    return(
            <div className="flex align-center justify-center w-100percent margin-bottom-10">
                <p className="w-200">Color: {paint.name}</p>
                <div className="box-100" style= {{background: `rgba(${paint.rgba.join(",")})`}}/>
                <div className="box-100" style= {{background: `rgba(${complement.rgba.join(",")})`}}/>
                <p className="w-200">Complement: {complement.name}</p>
                <button onClick={() => removeSwatch()}>Remove</button>
            </div>
    );
};

export default SchemeSwatch