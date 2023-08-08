const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainer = document.getElementById("question-container")
const rules = document.getElementById("rules")
const answerButtons = document.getElementById("answer-btns")
const flag = document.getElementById("flag")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    rules.classList.add("hide");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    reset();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
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
    clearStatusClass(document.body)
    nextButton.classList.add("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild
        (answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart!"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
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