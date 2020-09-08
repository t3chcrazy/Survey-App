import React from 'react'
import QuestionComponent from './questionComponent'
import './questionComponent'
import '../global/styles.css'

function ConfirmQuestion({questions, handleConfirm}) {
    return (
        <div className = "formContainer" style = {{alignItems: "flex-start"}}>
            {questions.map((quest, i) => <QuestionComponent key = {quest.questionTitle} question = {quest} />)}
            <button style = {{alignSelf: "center"}} className = "button" onClick = {handleConfirm}>Confirm</button>
        </div>
    )
}

export default ConfirmQuestion