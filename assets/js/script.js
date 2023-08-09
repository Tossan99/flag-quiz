const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainer = document.getElementById("question-container")
const question = document.getElementById("question")
const rules = document.getElementById("rules")
const answerButtons = document.getElementById("answer-btns")
const flag = document.getElementById("flag")
const flagContainer = document.getElementById("flag-container")

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

    flag.src = question.question

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
    nextButton.classList.add("hide")
    flagContainer.classList.remove("hide")
    answerButtons.classList.remove("hide")
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
    flagContainer.classList.add("hide")
    } else {
        startButton.innerText = "Restart!"
        startButton.classList.remove("hide")
        flagContainer.classList.add("hide")
        answerButtons.classList.add("hide")
        question.innerText = "Congratulations on completing the Flag Quiz! You have scored ${something"
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
        question: "assets/images/flag_belgium.png",
        answers: [
            {text: "Sweden", correct: false},
            {text: "Belgium", correct: true},
            {text: "Irland", correct: false},
            {text: "Germany", correct: false}
        ]
    },
    {
        question: "assets/images/flag_spain.png",
        answers: [
            { text: "Spain", correct: true },
            { text: "Portugal", correct: false },
            { text: "france", correct: false },
            { text: "Greece", correct: false }
        ]
    },
    {
        question: "assets/images/flag_slovakia.png",
        answers: [
            { text: "Estonia", correct: false },
            { text: "Slovakia", correct: true },
            { text: "Belarus", correct: false },
            { text: "Slovenia", correct: false }
        ]
    },
    {
        question: "assets/images/flag_iceland.png",
        answers: [
            { text: "Finland", correct: false },
            { text: "Iceland", correct: true },
            { text: "Denmark", correct: false },
            { text: "Norway", correct: false }
        ]
    },
    {
        question: "assets/images/flag_italy.png",
        answers: [
            { text: "Switzerland", correct: false },
            { text: "France", correct: false },
            { text: "Italy", correct: true },
            { text: "Croatia", correct: false }
        ]
    },
    {
        question: "assets/images/flag_albania.png",
        answers: [
            { text: "Macedonia", correct: false },
            { text: "Lithuania", correct: false },
            { text: "Montenegro", correct: false },
            { text: "Albania", correct: true }
        ]
    },
    {
        question: "assets/images/flag_austria.png",
        answers: [
            { text: "Germany", correct: false },
            { text: "Austria", correct: true },
            { text: "Estonia", correct: false },
            { text: "Bulgaria", correct: false }
        ]
    },
    {
        question: "assets/images/flag_russia.png",
        answers: [
            { text: "Belarus", correct: false },
            { text: "Ukraine", correct: false },
            { text: "Finland", correct: false },
            { text: "Russia", correct: true }
        ]
    },
    {
        question: "assets/images/flag_netherlands.png",
        answers: [
            { text: "Denmark", correct: false },
            { text: "Belgium", correct: false },
            { text: "Germany", correct: false },
            { text: "Netherlands", correct: true }
        ]
    },
    {
        question: "assets/images/flag_sweden.png",
        answers: [
            { text: "Finland", correct: false },
            { text: "Norway", correct: false },
            { text: "Denmark", correct: false },
            { text: "Sweden", correct: true }
        ]
    },

]