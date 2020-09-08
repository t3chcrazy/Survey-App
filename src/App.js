import React, {useState, useEffect} from 'react';
import './App.css';
import './components/idleState'
import IdleState from './components/idleState'
import AddQuestion from './components/addQuestion'
import ConfirmQuestions from './components/confirmQuestions'


const ScreenState = {
  IDLE_STATE: 0,
  ADDING_QUESTIONs: 1,
  CONFIRM_QUESTIONS: 2,
}

function App() {
  const [questions, setQuestions] = useState([])
  const [screen, setScreen] = useState(ScreenState.IDLE_STATE)

  const publishQuestions = () => setScreen(ScreenState.CONFIRM_QUESTIONS)

  const addQuestion = () => setScreen(ScreenState.ADDING_QUESTIONs)

  const confirmQuestions = () => {
    setScreen(ScreenState.IDLE_STATE)
    setQuestions([])
  }

  useEffect(() => {
    console.log("Questions have changed", questions)
  }, [questions])

  const appendQuestion = (question) => {
    console.log("Current state", questions, question)
    setQuestions([...questions, question])
  }

  const renderScreen = () => {
    switch (screen) {
      case ScreenState.IDLE_STATE:
        return <IdleState handleCreate = {addQuestion} />
      case ScreenState.ADDING_QUESTIONs:
        return <AddQuestion publishQuestions = {publishQuestions} concatQuestion = {appendQuestion} />
      default:
        return <ConfirmQuestions handleConfirm = {confirmQuestions} questions = {questions} />
    }
  }

  return (
    <div className = "App">
      <h1>Survey Tiger</h1>
      {renderScreen()}
    </div>
  );
}

export default App;
