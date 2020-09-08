class Question {
    constructor(questionType, questionTitle, answerList) {
        this.questionType = questionType
        this.questionTitle = questionTitle
        this.answerList = answerList
    }
}

const QuestionType = {
    SINGLE: 0,
    MULTI: 1
}

export {QuestionType}
export default Question