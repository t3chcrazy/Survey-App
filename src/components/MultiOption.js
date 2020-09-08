import React, {forwardRef} from 'react'
import '../css/MultiOption.css'
import '../global/styles.css'

const MultiOption = forwardRef(({handleAdd, handleDelete}, ref) => {
    return (
        <div className = "fieldWrapper optionField">
            <input ref = {ref} type = "text" />
            <div className = "buttonContainer">
                <button onClick = {handleAdd}>+</button>
                <button onClick = {handleDelete}>-</button>
            </div>
        </div>
    )
})

export default MultiOption