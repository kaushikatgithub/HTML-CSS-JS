let boxes = document.querySelectorAll(".box"); // All the boxes of the game
let resetbtn = document.querySelector("#reset-game"); // reset btn
let newGamebtn = document.querySelector("#new-game"); // new game btn
let playerO = document.querySelector(".player_O"); // player O info box
let playerX = document.querySelector(".player_X"); // player X info box
let winner = document.querySelector(".win"); // win display heading
let msgContainer = document.querySelector(".msg-container"); // message display container
let turnO = true; // variable to track the turn of player
let btnClick = 0; // To count the number of btn clicks
let winPatterns = [ // All the winning patterns stored as an 2D array
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let player1 = ""; // player 1 name
let player2 = ""; // player 2 name

// Function to disable the working of all the btns
const disableBtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// Function to enable the working of all the btns
const enableBtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

// Reset btn eventlistener function
const resetGame = () => {

    turnO = true; // Initially O has turn
    btnClick = 0
    // Green border must be on O side
    playerO.classList.add("turn");
    playerX.classList.remove("turn");

    // Enable all the buttons to move
    enableBtns();

    // Hide the message container
    winner.innerText = "Winner";
    winner.classList.add("hide");
    msgContainer.classList.add("hide");
}
// Set the eventlistner for reset btn
resetbtn.addEventListener("click", resetGame);

// new game btn event listner function
const newGame = () => {

    // Ask user for name
    player1 = prompt("Enter the name of first player :");
    player2 = prompt("Enter the name of second player :");
    if(player1 == null) {
        player1 = "Player 1";
    }else {
        player1 = "_" + player1 + "_";
    }
    if(player2 == null) {
        player2 = "Player 2";
    }else {
        player2 = "_" + player2 + "_";
    }
    
    // Change the default text for player names
    let players = document.querySelectorAll(".player-name");
    players[0].innerText = player1;
    players[1].innerText = player2;

    // Now hide the message container cuz game is starting from beggining
    msgContainer.classList.add("hide");
    resetGame();
}
// Adding event listener for newGame btn
newGamebtn.addEventListener("click", newGame);

// Function to identify that winner has found or not
const checkWinner = () => {
    if(btnClick == 9) {
        showWinner("D"); // Draw
        return;
    }
    for (let pattern of winPatterns) {

        let x = boxes[pattern[0]].innerText;
        let y = boxes[pattern[1]].innerText;
        let z = boxes[pattern[2]].innerText;

        if (x !== "" && y !== "" && z !== "") {
            if (x === y && y === z) {
                showWinner(x);
            }
        }
    }
}

// To show the winner name on the screen
const showWinner = (key) => {
    if(key === "D") {
        winner.innerText = "Well played, It's a Draw!";
    }
    else if (key === "O") {
        winner.innerText = `Congratulations, Winner is ${player1}`;
    }
    else {
        winner.innerText = `Congratulations, Winner is ${player2}`;
    }

    // Disable btns to avoid further play
    disableBtns();
    msgContainer.classList.remove("hide");
    winner.classList.remove("hide");
}

// Set the eventlistner function for all the play ground btns
for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function () {

        if (turnO) {
            this.innerHTML = "O";
            this.style.color = "#0000ff";
            turnO = false;
            playerO.classList.remove("turn");
            playerX.classList.add("turn");
        } else {
            this.innerHTML = "X";
            this.style.color = "#ff0000";
            turnO = true;
            playerX.classList.remove("turn");
            playerO.classList.add("turn");
        }

        this.disabled = true;
        btnClick += 1;
        checkWinner();
    });
}







