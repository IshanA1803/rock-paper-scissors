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
            computerScore++;
        }else{
            humanScore++;
        }
    }else if(humanChoice==="PAPER"){
        if(computerChoice==="SCISSORS"){
            computerScore++;
        }else{
            humanScore;
        }
    }else if(humanChoice==="SCISSORS"){
        if(computerChoice==="ROCK"){
            computerScore++;
        }else{
            humanScore++;
        }
    }

    if(computerScore===5){
        return -5;
    }
    if(humanScore===5){
        return 5;
    }
}

const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
const buttons=document.querySelector("#buttons");

buttons.addEventListener('click',function(event){
    console.log(event.target.id);
    let computerChoice=getComputerChoice();
    console.log(`Computer Choice : ${computerChoice}`)
    let score=playRound(computerChoice,event.target.id);
    const div=document.querySelector("#container");
    if(score===5){
        div.textContent="CONGRATULATIONS! You WIN :)";
        div.textContent+="Final Scores :";
        div.textContent+=`Player Score : ${humanScore} Computer Score : ${computerScore}`
        humanScore=0;computerScore=0;
    }else if(score===-5){
        div.textContent="OOPS! You LOSE :(";
        div.textContent+="Final Scores :";
        div.textContent+=`Player Score : ${humanScore} Computer Score : ${computerScore}`
        humanScore=0;computerScore=0;
    }else{
        div.textContent=`Player Score : ${humanScore} Computer Score : ${computerScore}`;
    }
})