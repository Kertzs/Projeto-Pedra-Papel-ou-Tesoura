//escolha aliatoria do computador
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        return  "scissors";
    } else if (computerChoice <= 0.67) {
        return "paper";

    } else {
        return "rock";
    }
}

function getHumanChoice(){
    let humanChoice = prompt();
    return humanChoice.toLowerCase();
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(getHumanChoice, getComputerChoice){

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

 if (humanChoice == "paper" && computerChoice == "paper") {
    humanScore += 0;
    computerScore += 0;
 } else if (humanChoice == "rock" && computerChoice == "rock") {
    humanScore += 0;
    computerScore += 0;
 } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    humanScore += 0;
    computerScore += 0;
 } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
    computerScore += 0;
 } else if (humanChoice == "rock" && computerChoice == "scissors") {    
    humanScore += 1;
    computerScore += 0;
 } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
    computerScore += 0;
 } else if (humanChoice == "rock" && computerChoice == "paper") {
    humanScore += 0;
    computerScore += 1;
 } else if (humanChoice == "paper" && computerChoice == "scissors") {
    humanScore += 0;
    computerScore += 1;
 } else if (humanChoice == "scissors" && computerChoice == "rock") {
    humanScore += 0;
    computerScore += 1;
 }
 updateScoreDisplay();
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice, getComputerChoice);
    }
    if (humanScore > computerScore) {
        endDiv.textContent = ("You win!");
    } else if (computerScore > humanScore) {
        endDiv.textContent = ("You lost!");
    } else {
        endDiv.textContent = ("You tied!");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('gameButton');
    if (button) {
        button.addEventListener('click', function() {
            playGame(playGame);
        });
    }
});

const newDiv = document.createElement('div');
newDiv.id = 'myDiv';
newDiv.className = 'container';
newDiv.textContent = `Human: ${humanScore}  Computer: ${computerScore}`;

document.body.appendChild(newDiv);

function updateScoreDisplay() {
    const scoreDiv = document.getElementById('myDiv');
    if (scoreDiv) {
        scoreDiv.textContent = `Human: ${humanScore}  Computer: ${computerScore}`;
    }
}

const endDiv = document.createElement('div');
endDiv.id = 'endDiv';
endDiv.className = 'container';
document.body.appendChild(endDiv);
