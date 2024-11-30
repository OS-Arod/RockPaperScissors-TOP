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