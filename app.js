const addPlayer1 = document.querySelector("#addPlayer1");
const addPlayer2 = document.querySelector("#addPlayer2");
const reset = document.querySelector("#reset");
const scoreLimit = document.querySelector("#scoreLimitSelector");
const scores = document.querySelector("#scores");
let player1Score = 0;
let player2Score = 0;

addPlayer1.addEventListener("click", function () {
    player1Score++;
    scores.innerHTML = updateScores();
    if (player1Score >= scoreLimit.options[scoreLimit.selectedIndex].value){
        alert("Player 1 won!!!");
        addPlayer1.classList.add("disabled");
        addPlayer2.classList.add("disabled");
    }
})

addPlayer2.addEventListener("click", function () {
    player2Score++;
    scores.innerHTML = updateScores();
    if (player2Score >= scoreLimit.options[scoreLimit.selectedIndex].value){
        alert("Player 2 won!!!");
        addPlayer1.classList.add("disabled");
        addPlayer2.classList.add("disabled");
    }
    
})

reset.addEventListener("click", function () {
    player1Score = 0;
    player2Score = 0;
    addPlayer1.classList.remove("disabled");
    addPlayer2.classList.remove("disabled");
    scores.innerHTML = updateScores();
})

function updateScores() {
    return `${player1Score} to ${player2Score}`;
}
