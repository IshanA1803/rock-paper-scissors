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
console.log(getComputerChoice())
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice")
    humanChoice=humanChoice.toUpperCase();
    return humanChoice
}
console.log(getHumanChoice())