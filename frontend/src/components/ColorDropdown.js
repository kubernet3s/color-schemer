import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import paints from "../paints.json"
import complementCalculator from "../functions/ComplementaryColors"




const ColorDropdown = ({scheme, schemeChange}) => {
    const list = paints.map(
        paint => ({
            "label": paint.name,
            "value": {...paint, complement: complementCalculator(paint, paints) }
        })
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