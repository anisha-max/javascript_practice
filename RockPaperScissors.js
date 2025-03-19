let msgbox = document.querySelector("#msg")
let computerChoice
let msg
let userScore = 0
let computerScore = 0

// R / R = 0 , R/P = P+1  ,r/s =r+1 , p/s = s+1 


function game(user) {
    const computer = Math.floor(Math.random() * 3)
    switch (computer) {
        case 0:
            computerChoice = "Rock"
            break;
        case 1:
            computerChoice = "Paper"
            break;
        case 2:
            computerChoice = "Scissors"
            break;
        default:
            console.log("wrong choice")
            break;
    }
    if (computerChoice == user) {
        msg = "it's a draw"
    } else if (computerChoice == "Rock" && user == "Paper") {
        userScore += 1
    } else if (computerChoice == "Rock" && user == "Scissors") {
        computerScore += 1
    } else if (computerChoice == "Scissors" && user == "Rock") {
        userScore += 1
    } else if (computerChoice == "Scissors" && user == "Paper") {
        computerScore += 1
    } else if (computerChoice == "Paper" && user == "Rock") {
        computerScore += 1
    } else if (computerChoice == "Paper" && user == "Scissors") {
        userScore += 1
    } else {
        console.log("something went wrong")
    }

    document.getElementById("userScore").innerHTML = userScore
    document.getElementById("compScore").innerHTML = computerScore
    
    console.log(userScore , computerScore)

}
