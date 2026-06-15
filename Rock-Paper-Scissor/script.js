const choices = document.querySelectorAll(".choice");

const userChoiceText =
document.getElementById("userChoice");

const computerChoiceText =
document.getElementById("computerChoice");

const winnerText =
document.getElementById("winner");

const userScoreText =
document.getElementById("userScore");

const computerScoreText =
document.getElementById("computerScore");

let userScore = 0;
let computerScore = 0;

choices.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const userChoice = button.id;
        playGame(userChoice);
    });
});

function playGame(userChoice){
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = options[randomIndex];

    userChoiceText.textContent = `Your Choice: ${userChoice}`;
    computerChoiceText.textContent = `Computer Choice: ${computerChoice}`;

    let result = "";
    if(userChoice === computerChoice){
        result = "It's a Draw";
    }
    else if((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")){
        result = "You Win!";
        userScore++;
    }
    else{
        result = "Computer Wins!";
        computerScore++;
    }

    winnerText.textContent = result;
    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
}