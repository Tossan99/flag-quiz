// All varibales used in the code
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const checkScoreButton = document.getElementById("score-btn");
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const rules = document.getElementById("rules");
const answerButtons = document.getElementById("answer-btns");
const flag = document.getElementById("flag");
const flagContainer = document.getElementById("flag-container");
const questionCounter = document.getElementById("question-counter");
let shuffledQuestions, currentQuestionIndex;
let score;
let time = 1000000;

//Timer
setInterval(updateCountdown, 1000);
const countdownTimer = document.getElementById("countdown-timer");

// Evenlistner to start game when "Start" button is pressed
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// Evenlistner to go to end screen when "check score" button is pressed
checkScoreButton.addEventListener("click", endScreen);

//Starts the game when called
function startGame() {
    time = 10;
    rules.classList.add("hide");
    questionCounter.classList.remove("hide");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    score = 0;
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide");
    question.innerText = "Which country does this flag belong to?";
    countdownTimer.classList.remove("hide");
    updateCountdown();
    setNextQuestion();
}

//Function that uppdates timer and calls other function when time = 0
function updateCountdown() {
    countdownTimer.innerHTML = `${time} Seconds left`;
    time--;
    if (time < 0 && currentQuestionIndex < 9) {
        currentQuestionIndex++;
        setNextQuestion();
    } else if (time < 0 && currentQuestionIndex === 9)
    endScreen();
}

//Function ques the next question when called
function setNextQuestion() {
    reset();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    questionCounter.innerHTML = `${currentQuestionIndex + 1}/10`;
}

//Function that shows next question when called
function showQuestion(question) {
    flag.src = question.question;

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

//Resets the game when called
function reset() {
    time = 10;
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    flagContainer.classList.remove("hide");
    answerButtons.classList.remove("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild
            (answerButtons.firstChild);
    }
}

//Function to select answers
function selectAnswer(e) {
    const selectedButton = e.target;
    selectedButton.classList.add("selected");
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct) {
        score += 1;
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
        flagContainer.classList.add("hide");
    } else {
        flagContainer.classList.add("hide");
        checkScoreButton.classList.remove("hide");
    }
}


//Function that sets green and red colors to body and element when called
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

//Function that clears green and red colors when called
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

//Function that goes to end screen when called
function endScreen() {
    time = 1000000;
    countdownTimer.classList.add("hide");
    clearStatusClass(document.body);
    checkScoreButton.classList.add("hide");
    startButton.innerText = "Restart!";
    questionCounter.classList.add("hide");
    startButton.classList.remove("hide");
    flagContainer.classList.add("hide");
    answerButtons.classList.add("hide");
    question.innerText = `Congratulations on completing the Flag Quiz! You have answerd right on ${score} out of 10 flags!`;
}

//Array for all questions and answers
const questions = [
    {
        question: "assets/images/flag_belgium.png",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Belgium", correct: true },
            { text: "Irland", correct: false },
            { text: "Germany", correct: false }
        ]
    },
    {
        question: "assets/images/flag_spain.png",
        answers: [
            { text: "Spain", correct: true },
            { text: "Portugal", correct: false },
            { text: "France", correct: false },
            { text: "Greece", correct: false }
        ]
    } , 
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

];