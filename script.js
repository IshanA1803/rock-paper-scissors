let humanScore=0,computerScore=0;

function getComputerChoice(){
    let randomNumber=Math.floor((Math.random()*3))+1
    if(randomNumber===1){
        return "ROCK"
    }else if(randomNumber===2){
        return "PAPER"
    }else{
        return "SCISSORS"
    }
}

function playRound(computerChoice,humanChoice){

    humanChoice=humanChoice.toUpperCase();
    
    if(humanChoice===computerChoice){
        return 0
    }else if(humanChoice==="ROCK"){
        if(computerChoice==="PAPER"){
            computerScore++
            return -1
        }else{
            humanScore++
             return 1
        }
    }else if(humanChoice==="PAPER"){
        if(computerChoice==="SCISSORS"){
            computerScore++
            return -1
        }else{
            humanScore
             return 1
        }
    }else if(humanChoice==="SCISSORS"){
        if(computerChoice==="ROCK"){
            computerScore++
            return -1
        }else{
            humanScore++
             return 1
        }
    }
}

const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");

rock.addEventListener('click',()=>{
    console.log("rock clicked");
    let computerChoice=getComputerChoice();
    playRound(computerChoice,"rock");
    const div=document.querySelector("div");
    div.textContent=`Player Score : ${humanScore} \t Computer Score : ${computerScore}`;
});

paper.addEventListener('click',()=>{
    console.log("paper clicked");
    let computerChoice=getComputerChoice();
    playRound(computerChoice,"paper");
    const div=document.querySelector("div");
    div.textContent=`Player Score : ${humanScore} \t Computer Score : ${computerScore}`;
});

scissors.addEventListener('click',()=>{
    console.log("scissors clicked");
    let computerChoice=getComputerChoice();
    playRound(computerChoice,"scissors");
    const div=document.querySelector("div");
    div.textContent=`Player Score : ${humanScore} \t Computer Score : ${computerScore}`;
});


