function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var answer = prompt();
   return answer;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move===undefined || move===null) {
        return getInput();
    } else {
    return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move===undefined || move===null) {
        return randomPlay();
    } else {
    return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);
    if (winner === "player") {
        playerWins++;
    } else if (winner === "computer") {
        computerWins++;
    }
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins);
    }
    if (playerWins === 5) {
        console.log("Player wins with a score of " + playerWins + " to " + computerWins + "! Humans rule; computers drool!");
    } else if (computerWins === 5) {
        console.log("Computer wins with a score of " + computerWins + " to " + playerWins + "! All hail our new robotic overlords!");
    }
    return [playerWins, computerWins];
}

playToFive();