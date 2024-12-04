let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let Choice = Math.floor(Math.random() * 3);

    switch (Choice) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function getHumanChoice() {
    let sign = prompt("Rock, Paper, or Scissors?").toLowerCase();

    while (!(sign === "rock" || sign === "paper" || sign === "scissors")) {
        sign = prompt("Please select: Rock, Paper, or Scissors?").toLowerCase();
    }
    
    return sign.charAt(0).toUpperCase() + sign.slice(1);
}

function playGame() {
    while (humanScore < 5 || computerScore < 5) {
        console.log("Score: " + humanScore + ";Computer Score: " + computerScore)
        console.log(playRound(getComputerChoice(), getHumanChoice()));

        if (humanScore === 5) {
            return "Final score: " + humanScore + ";\nComputer Score: " + computerScore + "\nWinner Winner!";
        } else if (computerScore === 5){
            return "Final score: " + humanScore + ";\nComputer Score: " + computerScore + "\nYou Lost.";
        }
    }
}

function playRound(computerChoice, humanChoice) {
    console.log("Super Smart AI Choose....\n" + computerChoice);

    if (computerChoice === "Rock" && humanChoice === "Rock") {
        return "Draw!";
    } else if (computerChoice === "Rock" && humanChoice === "Paper") {
        humanScore++;
        return "You Win!";
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore++;
        return "You Lose!";
    } else if (computerChoice === "Scissors" && humanChoice === "Scissors") {
        return "Draw!";
    } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        humanScore++;
        return "You win!";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        return "You Lose!";
    } else if (computerChoice === "Paper" && humanChoice === "Paper") {
        return "Draw!";
    } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        humanScore++;
        return "You win!";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore++;
        return "You Lose!";
    }
}

console.log(playGame());
// console.log(playRound(getComputerChoice(), getHumanChoice()));