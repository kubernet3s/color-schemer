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

    const dot = (color = '#ccc') => ({
        alignItems: 'center',
        display: 'flex',
      
        ':after': {
          backgroundColor: color,
          border: "1px solid black",
          borderRadius: 10,
          content: '" "',
          display: 'block',
          marginRight: 8,
          height: 10,
          width: 10,
        },
      });

      const customStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          const color = data.value.rgba.join(",").slice(0,3);
          debugger
          return {
            ...styles,
            backgroundColor: isDisabled
              ? null
              : isSelected
              ? color
              : isFocused
              ? color
              : null,
            color: isDisabled
              ? '#ccc'
              : isSelected
              ? 'white'
                ? 'white'
                : 'black'
              : color,
            cursor: isDisabled ? 'not-allowed' : 'default',
      
            ':active': {
              ...styles[':active'],
              backgroundColor: !isDisabled && (isSelected ? color : color),
            },
          };
        },
        input: styles => ({ ...styles, ...dot() }),
        placeholder: styles => ({ ...styles, ...dot() }),
        singleValue: (styles, { data }) => ({ ...styles, ...dot(data.value.rgba.join(",")) }),
      };    debugger

    return(
        <Select 
            options = {list}
            closeMenuOnSelect = {false}
            styles = {customStyles}
            isMulti
            components = {makeAnimated()}
            onChange = {handleChange}
        />
    )
}

export default ColorDropdown