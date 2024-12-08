let humanScore=0,computerScore=0;

function getComputerChoice(){
    let randomNumber=Math.floor((Math.random()*3))+1;
    if(randomNumber===1){
        return "ROCK";
    }else if(randomNumber===2){
        return "PAPER";
    }else{
        return "SCISSORS";
    }
}

function playRound(computerChoice,humanChoice){
    humanChoice=humanChoice.toUpperCase();
    
    if(humanChoice===computerChoice){
        return 0;
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

buttons.addEventListener('click',function(event){
    console.log(event.target.id);
    let computerChoice=getComputerChoice();
    console.log(`Computer Choice : ${computerChoice}`)
    let score=playRound(computerChoice,event.target.id);
    const div=document.querySelector("#container");
    const pre=document.createElement("pre");
    if(score===5){
        div.textContent='';
        pre.textContent=`CONGRATULATIONS! You WIN :)\nFinal Scores :\nPlayer Score : ${humanScore}\tComputer Score : ${computerScore}`;
        div.appendChild(pre);
        humanScore=0;computerScore=0;
    }else if(score===-5){
        div.textContent='';
        const pre=document.createElement("pre");
        pre.textContent=`OOPS! You LOSE :)\nFinal Scores :\nPlayer Score : ${humanScore}\tComputer Score : ${computerScore}`;
        div.appendChild(pre);
        humanScore=0;computerScore=0;
    }else{
        div.textContent="";
        pre.textContent=`Player Score : ${humanScore}\tComputer Score : ${computerScore}`;
        div.appendChild(pre);
    }
});