let startButton = document.getElementById("start-btn")
let questionContainer = document.getElementsByClassName("question-container")[0]
let rules = document.getElementById("rules")

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started!")
    rules.classList.add("hide");
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
}