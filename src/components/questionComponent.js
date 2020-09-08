import React from 'react'
import {QuestionType} from '../models/Question'

function QuestionComponent({question}) {
    return (
        <>
            <h4>{question.questionTitle}</h4>
            {question.answerList.map((item, index) => 
            <div key = {index} style = {{display: "flex"}}>
                {question.questionType === QuestionType.SINGLE? <input type = "radio" name = "answer" value = {item} />: <input type = "checkbox" />}
                {item}
            </div>)}
        </>
    )
}

export default QuestionComponent