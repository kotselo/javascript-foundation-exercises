let name = "Carlo Pamenting";
    console.log(name);
    document.write(name);

const hello = document.getElementById("button");

function sayHello(){
    alert("Hello! Yeah Boy!");
} 

///////////////////START////
 const choices = ["Rock", "Paper", "Scissors"];
 
 function getComputerChoice(){
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
 }


 const computerSelection = getComputerChoice();

 function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return "The result is a Tie!"
    }
    if(playerSelection.toUpperCase() === "ROCK"){
        if(computerSelection.toUpperCase() === "PAPER"){
            return "You Lost to the Alien! It's choice is paper."
        } 
        if(computerSelection.toUpperCase() === "SCISSORS"){
            return "You Won! It's choice is scissors!"
        }
    }
    if(playerSelection.toUpperCase() === "PAPER"){
        if(computerSelection.toUpperCase() === "ROCK"){
            return "You Won! It's Choice is Rock!!!!!!!."
        } 
        if(computerSelection.toUpperCase() === "SCISSORS") {
            return "You Lost to an Alien! It's choice is scissors!"
        }
    }
    if(playerSelection.toUpperCase() === "SCISSORS"){
        if(computerSelection.toUpperCase() === "ROCK"){
            return "You Lost to an Alien! It's choice is rock"
        } 
        if(computerSelection.toUpperCase() === "PAPER"){
            return "You Won! It's choice is paper"
        }
    }
 }

 //console.log(playRound(playerSelection, computerSelection));
 //const playerSelector = prompt("Choose your Bet!", "[Rock, Paper, Scissors]");
function game(){
    for(let i = 0; i<5;i++){
         let playerSelection = prompt("What's your choice");
        console.log(playRound(playerSelection, computerSelection));
    }
}
console.log(game());