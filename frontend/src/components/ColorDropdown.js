import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import paints from "../paints.json"



const ColorDropdown = () => {
    const list = paints.map(
        paint => ({
            "label": paint.name,
            "value": paint
        })
    )

    return(
        <Select 
            options = {list}
            closeMenuOnSelect = {false}
            isMulti
            components = {makeAnimated()}
        />
    )
}

export default ColorDropdown