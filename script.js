console.log("Hello from External JS file!")

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

    // I want to return sign as the first letter Capitalized
    return sign.charAt(0).toUpperCase() + sign.slice(1);
}

function playRound(computerChoice, humanChoice) {
    console.log("Super Smart AI Choose....\n" + computerChoice);

    if (computerChoice === "Rock" && humanChoice === "Rock") {
        return "Draw!";
    } else if (computerChoice === "Rock" && humanChoice === "Paper") {
        return "You Win!";
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        return "You Lose!";
    } else if (computerChoice === "Scissors" && humanChoice === "Scissors") {
        return "Draw!";
    } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        return "You win!";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        return "You Lose!";
    } else if (computerChoice === "Paper" && humanChoice === "Paper") {
        return "Draw!";
    } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        return "You win!";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        return "You Lose!";
    }
}

// console.log("Super Smart AI Choose....\n" + getComputerChoice());
// console.log("Human Choose....\n" + getHumanChoice());
console.log(playRound(getComputerChoice(), getHumanChoice()));