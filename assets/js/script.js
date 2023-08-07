let startButton = document.getElementById("start-btn")
let questionContainer = document.getElementsByClassName("question-container")[0]
let rules = document.getElementById("rules")

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started!")
    rules.classList.add("hide");
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    nextQuestion()
}

const questions = [
    {
        question: "flag of norway"
        answers: [
            {text: "Sweden", correct: false},
            {text: "Denmark", correct: false},
            {text: "Finland", correct: false},
            {text: "Norway", correct: true}
        ]
    },
    {
        question: "flag of sweden"
        answers: [
            { text: "Sweden", correct: true },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: false }
        ]
    },
    {
        question: "flag of norway"
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway"
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway"
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway"
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway"
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway"
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway"
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },
    {
        question: "flag of norway"
        answers: [
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
            { text: "Norway", correct: true }
        ]
    },

]

function nextQuestion() {

}