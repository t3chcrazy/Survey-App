import React, {useRef} from 'react'
import Question, {QuestionType} from '../models/Question'
import '../global/styles.css'

function SingleQuestionForm({setIdle, addQuestion, publishQuestions}) {

    const title = useRef()
    const option1 = useRef()
    const option2 = useRef()

    const handleAddButton = () => {
        const newQuestion = new Question(QuestionType.SINGLE, title.current.value, [option1.current.value, option2.current.value])
        addQuestion(newQuestion)
        setIdle()
    }

    return (
        <div className = "formContainer">
            <div className = "fieldWrapper">
                <div className = "questionMark">
                    ?
                </div>
                <input ref = {title} className = "inputField" placeholder = "Question" />
            </div>
            <h4 style = {{alignSelf: "flex-start"}}>Options</h4>
            <input className = "fieldWrapper" ref = {option1} type = "text" />
            <input className = "fieldWrapper" ref = {option2} type = "text" />
            <button type = "submit" onClick = {handleAddButton} className = "button">Add Question</button>
            <button onClick = {publishQuestions} className = "button">Publish</button>
        </div>
    )
}

export default SingleQuestionForm