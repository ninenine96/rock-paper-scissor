game()
function computerSelection() {
    const options = ["rock", "paper", "scissors"]
    
    return options[Math.floor(Math.random() * 3)]
}

function playerSelection() {
    let selection = prompt("Rock Paper or Scissors?")
    return selection.toLowerCase()
}

function playRound(computerSelection, playerSelection) {
    console.log("Computer selected: " + computerSelection.toUpperCase() + 
                ", Player Selected: " + playerSelection.toUpperCase())
    if(computerSelection === playerSelection) {
        console.log("It's a draw. How eventful.")
        return 0
    }

    else if(computerSelection == "rock" && playerSelection == "paper" || 
        computerSelection == "paper" && playerSelection == "scissors" ||
        computerSelection == "scissors" && playerSelection == "rock"
    ) {
        console.log("You win. Hurray!")
        return 1
    }
    else{
        console.log("You lose!")
        return -1
    }
}

function game() {
    let Score_Computer = 0;
    let Score_Player = 0;

    for(let i = 0; i < 5; i++) {
        
        let resultGame = playRound(computerSelection(), playerSelection())

        if (resultGame == 1) 
            Score_Player++
        else if(resultGame == -1)
            Score_Computer++

        let Score = "Player: " + Score_Player + " Computer: " + Score_Computer

        if(Score_Computer || Score_Player === 3) {
            let message = Score_Computer > Score_Player ?  "Computer Wins" : "Player Wins"
            console.log("Game ends! " + message)
            console.log(Score)
            break
        } 
        console.log(Score)
    }
}