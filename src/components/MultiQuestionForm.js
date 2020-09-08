import React, {useState, createRef, useRef} from 'react'
import Question, {QuestionType} from '../models/Question'
import MultiOption from './MultiOption'

const generateRandom = () => Math.round(Math.random()*100000)

function MultiQuestionForm({addQuestion, publishQuestion, setIdle}) {
    const [options, setOptions] = useState([{id: generateRandom(), inputRef: createRef()}])
    const titleRef = useRef()

    const addOption = () => {
        console.log("Hell world")
        if (options.length < 4) {
            setOptions(options.concat({id: generateRandom(), inputRef: createRef()}))
        }
    }

    const handleDelete = id => {
        console.log("Hello", id)
        setOptions(options.filter(o => o.id !== id))
    }

    const handleAddButton = () => {
        const newQuestion = new Question(QuestionType.MULTI, titleRef.current.value, options.map(o => o.inputRef.current.value))
        addQuestion(newQuestion)
        setIdle()
    }

    return (
        <div className = "formContainer">
            <div className = "fieldWrapper">
                <div className = "questionMark">
                    ?
                </div>
                <input ref = {titleRef} className = "inputField" placeholder = "Question" />
            </div>
            <h4>Options</h4>
            {options.map(o => <MultiOption key = {o.id} ref = {o.inputRef} handleAdd = {addOption} handleDelete = {() => handleDelete(o.id)} />)}
            {options.length === 4?
            <>
                <button onClick = {handleAddButton} className = "button">
                    Add Question
                </button>
                <button onClick = {publishQuestion} className = "button">
                    Publish
                </button>
            </>: <></>}
        </div>
    )
}

export default MultiQuestionForm