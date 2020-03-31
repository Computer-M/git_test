//Sets up global results
let results = [0,0]

// Random Int from 0-2 inclusive
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min) ) + min;
}
// Computer Plays a random move
function ComputerMove(){
let move = getRndInteger(0,3)
switch (move){
    case 0:
    return "rock"
    break;
    case 1:
    return "paper"
    break; 
    case 2: 
    return "scissors"
    break;
}
}
// Checks Wins/Losses and changes Wins/Losses based on result
function Game(Pmove,Cmove){
    if (Pmove.toLowerCase() === "rock"){
        if (Cmove === "rock"){FormatDisplay("draw","rock","rock")}
        else if (Cmove === "paper"){FormatDisplay("computer","rock","paper")}
        else if (Cmove === "scissors"){FormatDisplay("player","rock","scissors")}
        else {console.log("Error has occured")}
    }
    else if (Pmove.toLowerCase() === "paper"){
        if (Cmove === "rock"){FormatDisplay("player","paper","rock")}
        else if (Cmove === "paper"){FormatDisplay("draw","paper","paper")}
        else if (Cmove === "scissors"){FormatDisplay("computer","paper","scissors")}
        else {console.log("Error has Occured")}
    }
    else if (Pmove.toLowerCase() === "scissors"){
        if (Cmove === "rock"){FormatDisplay("computer","scissors","rock")}
        else if (Cmove === "paper"){FormatDisplay("player","scissors","paper")}
        else if (Cmove === "scissors"){FormatDisplay("draw","scissors","scissors")}
        else {console.log("Error has Occured")}
    }
    else {
        console.log("Player has made invalid move")
    }
    return 
}

function FormatDisplay(winner,player,computer){
    //Clear Previous Result
    try{
        ClearDisplay()
    }
    catch(ReferenceError){}
    // Create all new Elements
    const container = document.querySelector(".play")
    const announce = document.createElement("h3")
    const vs = document.createElement("h6")
    const score = document.createElement("h4")
    //Title + vs Text
    if (winner === "player"){
        announce.textContent = "You Have Won"
        vs.textContent = player + " beats " + computer
        results[0]++
    }
    else if (winner === "computer"){
        announce.textContent = "You Have Lost"
        vs.textContent = computer + " beats " + player
        results[1]++
    }
    else {
        announce.textContent = "You have Drawn"
        vs.textContent = "Both Players played: " + computer
    }

    //Score Text 
    const containerResults = document.querySelector(".stats")
    score.textContent = "Games Won: " + results[0] +  ". Games Lost: " + results[1] + "."

    //Place new Elements into DOM
    container.appendChild(announce)
    container.appendChild(vs)
    containerResults.appendChild(score)

}
function ClearDisplay(){
    const container = document.querySelector(".play")
    const containerResults = document.querySelector(".stats")

    const announce = document.querySelector(".play h3")
    const vs = document.querySelector(".play h6")
    const score = document.querySelector(".stats h4")

    container.removeChild(announce)
    container.removeChild(vs)
    containerResults.removeChild(score)
}

//-------------Button Commands-------------\\
function PlayRock(){
    let player = "rock";
    Game(player,ComputerMove())
}
function PlayPaper(){
    let player = "scissors";
    Game(player,ComputerMove())
}
function PlayScissors(){
    let player = "scissors";
    Game(player, ComputerMove())
}
function ScoreReset(){
    results = [0,0]
    try {
        ClearDisplay()
    }
    catch(ReferenceError){}
}