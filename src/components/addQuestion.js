import React, {useState} from 'react'
import './singleQuestion';
import MultiQuestionForm from './MultiQuestionForm';
import SingleQuestionForm from './singleQuestion';
import CustomSelect from './customSelect';

const AddMode = {
    IDLE: 0,
    SINGLE: 1,
    MULTI: 2,
}

function AddQuestion({publishQuestions, concatQuestion}) {
    const [mode, setMode] = useState(AddMode.IDLE)

    const setIdleQuestion = () => setMode(AddMode.IDLE)

    const setSingle = () => setMode(AddMode.SINGLE)

    const setMulti = () => setMode(AddMode.MULTI)

    const renderForm = () => {
        switch (mode) {
            case AddMode.IDLE:
                return <></>
            case AddMode.SINGLE:
                return <SingleQuestionForm setIdle = {setIdleQuestion} publishQuestions = {publishQuestions} addQuestion = {concatQuestion} />
            default:
                return <MultiQuestionForm setIdle = {setIdleQuestion} addQuestion = {concatQuestion} publishQuestion = {publishQuestions} />
        }
    }

    return (
        <div>
            <CustomSelect setSingle = {setSingle} setMulti = {setMulti} />
            {renderForm()}
        </div>
    )
}

export default AddQuestion