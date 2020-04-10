import React from "react"

const SchemeSwatch = (paint) => {
    const complement = paint.complement
    return(
        <>
            <div style= {{background: `rgba(${paint.rgba.join(",")})`}}>Color</div>
            <div style= {{background: `rgba(${complement.rgba.join(",")})`}}>Complement</div>
        </>
    );
};

export default SchemeSwatch