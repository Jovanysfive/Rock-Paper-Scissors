let playerscore=0
let computerscore=0

function getComputerChoice(){
   let numrand= Math.floor(Math.random() *3)
   let choise =["rock", "paper", "scissors"]
  return  choise[numrand];
}
let computerchoise=getComputerChoice();
 function getwinner(playerSelection,computerSelection){
    /*
    if(playerSelection===computerSelection){
        console.log("bove are equal")
    }
    */
    if(
        playerSelection==="rock" && computerSelection==="scissors"||
        playerSelection==="paper" && computerSelection==="rock"||
        playerSelection==="scissors" && computerSelection==="paper"
    ){
        playerscore++;
        console.log(`Pontuaçaão do jogador: ${playerscore}`)
    }
    if(
        computerSelection==="rock" &&  playerSelection==="scissors"||
        computerSelection==="paper" &&  playerSelection==="rock"||
        computerSelection==="scissors" &&  playerSelection==="paper"
    ){
        computerscore++;
        console.log(`Pontuação do computador: ${computerscore}`)
    }
}

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");


rock.addEventListener('click', () => getwinner('rock',getComputerChoice()));
paper.addEventListener('click', () => getwinner('paper',getComputerChoice()));
scissors.addEventListener('click', () => getwinner('scissors',getComputerChoice()));

console.log(getComputerChoice())



