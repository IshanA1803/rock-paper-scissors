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

function getHumanChoice(){
    return prompt("Enter your choice")
}
function playRound(computerChoice,humanChoice){
    if(humanChoice===null){
        return
    }
    humanChoice=humanChoice.toUpperCase();
    
    if(humanChoice===computerChoice){
        return "It's a Draw !!"
    }else if(humanChoice==="ROCK"){
        if(computerChoice==="PAPER"){
            computerScore++
            return `You lose! ${computerChoice} beats ${humanChoice} !`
        }else{
            humanScore++
             return `You win! ${humanChoice} beats ${computerChoice} !`
        }
    }else if(humanChoice==="PAPER"){
        if(computerChoice==="SCISSORS"){
            computerScore++
            return `You lose! ${computerChoice} beats ${humanChoice} !`
        }else{
            humanScore
             return `You win! ${humanChoice} beats ${computerChoice} !`
        }
    }else if(humanChoice==="SCISSORS"){
        if(computerChoice==="ROCK"){
            computerScore++
            return `You lose! ${computerChoice} beats ${humanChoice} !`
        }else{
            humanScore++
             return `You win! ${humanChoice} beats ${computerChoice} !`
        }
    }else{
        return "Invalid Entry"
    }
}

function playGame(){
    for(let i=0;i<5;++i){
        let result=playRound(getComputerChoice(),getHumanChoice())
        if(result===undefined){
            console.log("User decided to exit mid game")
            return
        }
        console.log(result)
    }
    if(humanScore===computerScore){
        console.log("It's a DRAW !!!")
    }else if(humanScore<computerScore){
        console.log("You LOSE !!!")
    }else{
        console.log("You WIN !!!")
    }
}

playGame()