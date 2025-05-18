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
//escolha do jogador
function getHumanChoice(){
    let humanChoice = prompt();
    return humanChoice.toLowerCase();
    
}
//as variaveis da pontuação
let humanScore = 0;
let computerScore = 0;

//a função que faz uma ronda do jogo
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
 //para mostrar o resoltado do jogo no final
 updateScoreDisplay();
}
//a função que inicia o jogo
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
//o botão que ativa a função para iniciar o jogo
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('gameButton');
    if (button) {
        button.addEventListener('click', function() {
            playGame(playGame);
        });
    }
});
//a div criada para mostrar o resultado do jogo
const newDiv = document.createElement('div');
newDiv.id = 'myDiv';
newDiv.className = 'container';
newDiv.textContent = `Human: ${humanScore}  Computer: ${computerScore}`;

document.body.appendChild(newDiv);
//a função que atualiza a pontuação para aparecer na div
function updateScoreDisplay() {
    const scoreDiv = document.getElementById('myDiv');
    if (scoreDiv) {
        scoreDiv.textContent = `Human: ${humanScore}  Computer: ${computerScore}`;
    }
}
//a div criada para mostrar quem perdeu ou ganhou
const endDiv = document.createElement('div');
endDiv.id = 'endDiv';
endDiv.className = 'container';
document.body.appendChild(endDiv);
