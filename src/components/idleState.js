import React from 'react'

function IdleState({handleCreate}) {
    return (
        <div style = {{display: "flex", flexFlow: "column", alignItems: "center"}}>
            <button className = "button" onClick = {handleCreate}>Create Survey</button>
            <button className = "button">Take Survey</button>
        </div>
    )
}

export default IdleState