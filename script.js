let playerscore=0
let computerscore=0

function getComputerChoice(){
   let numrand= Math.floor(Math.random() *3)
   let choise =["rock", "paper", "scissors"]
  return  choise[numrand];
}

 function getwinner(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
    }
    if(
        playerSelection==="rock" && computerSelection==="scissors"||
        playerSelection==="paper" && computerSelection==="rock"||
        playerSelection==="scissors" && computerSelection==="paper"
    ){
        playerscore++;
    }
    if(
        computerSelection==="rock" &&  playerSelection==="scissors"||
        computerSelection==="paper" &&  playerSelection==="rock"||
        computerSelection==="scissors" &&  playerSelection==="paper"
    ){
        computerscore++;
    }
}

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

function handleButtonClick(choice) {
    console.log(`Clicked ${choice}`);

}

rock.addEventListener('click', () => handleButtonClick('Rock'));
paper.addEventListener('click', () => handleButtonClick('Paper'));
scissors.addEventListener('click', () => handleButtonClick('Scissors'));



