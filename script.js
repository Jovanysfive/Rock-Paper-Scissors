function getComputerChoise(){
   let numrand= Math.floor(Math.random() *3)
   let a =["rock", "paper", "scissors"]
   a[numrand];
}
let computerchoise=getComputerChoise();
let playerscore=0
let computerscore=0

//Utilizamos a função para a logica de vencedor do perdra papel e tesoura entre o usuario e computador
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

for (let index = 0; index < 5; index++)
{
    getwinner("rock", getComputerChoise())
}

console.log(`Pontuação do jogador ${playerscore}`)
console.log(`Pontuação do computador ${computerscore}`)

if (playerscore>computerscore) {
    console.log("Player winner")
}else{
    console.log("computer winner")
}

