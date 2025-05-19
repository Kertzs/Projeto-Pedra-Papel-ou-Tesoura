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
    let humanChoice = prompt("Enter your choice: rock, paper, or scissors");
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

 //para mostrar o resultado do jogo no final
 updateScoreDisplay();
}

//a função que inicia o jogo
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice, getComputerChoice);
    }
    if (humanScore > computerScore) {
        EndDiv.textContent = ("Winner: Human!");
    } else if (computerScore > humanScore) {
        EndDiv.textContent = ("Winner: Computer!");
    } else {
        EndDiv.textContent = ("Winner: Draw!");
    }
}

//o botão que ativa a função para iniciar o jogo
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("gameButton");
    if (button) {
        button.addEventListener('click', function() {
            playGame(playGame);
        });
    }
});

//a div criada para mostrar o resultado do jogo
const UptScoreDiv = document.createElement('div');
UptScoreDiv.id = 'uptScoreDiv';
UptScoreDiv.className = 'uptScoreContainer';
UptScoreDiv.textContent = `Human: ${humanScore}  Computer: ${computerScore}`;
document.body.appendChild(UptScoreDiv);

//a função que atualiza a pontuação para aparecer na div
function updateScoreDisplay() {
    const ScoreDiv = document.getElementById('uptScoreDiv');
    if (ScoreDiv) {
        ScoreDiv.textContent = `Human: ${humanScore}  Computer: ${computerScore}`;
    }
}

//a div criada para mostrar quem perdeu ou ganhou
const EndDiv = document.createElement('div');
EndDiv.id = 'endDiv';
EndDiv.className = 'endContainer';
EndDiv.textContent = "Winner: ";
document.body.appendChild(EndDiv);
