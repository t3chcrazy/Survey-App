import React from 'react'
import '../css/CustomSelect.css'

function CustomSelect({setSingle, setMulti}) {
    return (
        <select className = "customSelect">
            <option value = "single" onClick = {setSingle}>Single Select</option>
            <option value = "multi" onClick = {setMulti}>Multi Select</option>
        </select>
    )
}

export default CustomSelect