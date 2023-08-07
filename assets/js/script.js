const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainer = document.getElementsByClassName("question-container")[0]
const rules = document.getElementById("rules")
const answerButtons = document.getElementsByClassName("answer-btns")[0]
const flag = document.getElementById("flag")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    qurentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    console.log("Started!")
    rules.classList.add("hide");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showFlag(shuffledQuestions[currentQuestionIndex])
    reset()
}

function showFlag(question) {
    flag.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button)
    })
}

function reset() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer() {

}


const questions = [
    {
        question: "flag of norway",
        answers: [
            {text: "Sweden", correct: false},
            {text: "Denmark", correct: false},
            {text: "Finland", correct: false},
            {text: "Norway", correct: true}
        ]
    },
    {
        question: "flag of sweden",
        answers: [
            { text: "Sweden", correct: true },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: false }
        ]
    },
    {
        question: "flag of norway",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },

]