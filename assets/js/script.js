let startButton = document.getElementsByClassName("start-btn")
let questionContainer = document.getElementsByClassName("question-container")

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started!")
    startButton.classList.add("hide")
    questionContainer.classList.remove("hide");
}