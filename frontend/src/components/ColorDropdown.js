import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import paints from "../paints.json"
import complementCalculator from "../functions/ComplementaryColors"




const ColorDropdown = ({scheme, schemeChange}) => {
    const list = paints.map(
        paint => {
            const name = paint.name
            const rgbaString = `rgba(${paint.rgba.join(",")})`
            debugger
            const dot = <div style= {{
                background: rgbaString,
                border: "1px solid black",
                height: "15px",
                width: "15px",
                borderRadius: "15px",
                marginLeft: "10px"
                }}/>
            return({
                "label": <span className="flex align-center space-between">{name}{dot}</span>,
                "value": {...paint, complement: complementCalculator(paint, paints) }
            })
        }
    )

    const handleChange = (selected) => {
        const change = selected ? selected.map(selection => selection.value) : []
        schemeChange(change)
    }

    return(
        <Select 
            options = {list}
            closeMenuOnSelect = {false}
            isMulti
            components = {makeAnimated()}
            onChange = {handleChange}
        />
    )
}

export default ColorDropdown