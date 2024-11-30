console.log("Hello from External JS file!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let Choice = Math.floor(Math.random() * 3);

    switch ((Choice)) {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
            break;
    }
}

function getHumanChoice() {
    let sign = prompt("Rock, Paper, or Scissors?");

    while (!(sign === "Rock" || sign === "Paper" || sign === "Scissors")) {
        sign = prompt("Please select: Rock, Paper, or Scissors?");
    }

    return sign;
}

console.log("Super Smart AI Choose....\n" + getComputerChoice());
console.log("Human Choose....\n" + getHumanChoice());