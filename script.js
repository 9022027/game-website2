/* Author: Farai de Grave */

// Retrieve HTML elements
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
// Game variables
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "lightgreen";
const snakeColor = "#ADD8E6";
const snakeBorder = "blue";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];
// Add event listeners
window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);
// Start the game on page load

gameStart();
// Function to start the game
function gameStart(){
    running= true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};

// Function that performs each "tick" of the game
function nextTick() {
    if (running) {
        // Calculate the duration of the timeout (game speed)
        const timeoutDuration = 112 - (score * 2);
       // Timeout to execute the next tick
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, timeoutDuration);
    } else {
        // Display the end of the game when not playing anymore
        displayGameOver();
    }
};

// Function to clear the game board
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};

// Function to create food
function createFood() {
    function randomFood(min, max) {
        return Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    }

// Keep trying until food is not placed on the snake
    do {
        foodX = randomFood(0, gameWidth - unitSize);
        foodY = randomFood(0, gameHeight - unitSize);
    } while (isFoodOnSnake());
   // Check if food is placed on the snake
    function isFoodOnSnake() {
        for (let i = 0; i < snake.length; i++) {
            if (foodX === snake[i].x && foodY === snake[i].y) {
                return true;
            }
        }
        return false;
    }
}

// Function to draw food
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};

// Function to move the snake
function moveSnake(){
    const head = {x: snake[0].x + xVelocity,
                  y: snake[0].y + yVelocity};
     // Add the new head to the beginning of the snake
    snake.unshift(head);
    
    // If food is eaten, increase the score and create new food 
    if(snake[0].x == foodX && snake[0].y == foodY){
        score+=1;
        scoreText.textContent = score;
        createFood();
    }
    else{
        // If no food is eaten, remove the last part of the snake
        snake.pop();
    }     
};

// Function to draw the snake
function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};

// Function for changing direction when pressing keys
function changeDirection(event) {
    const directionChangeCooldown = 2000;
    let lastDirectionChangeTime = 0;
    const currentTime = Date.now();

    // Check if enough time has passed since the last direction change
    if (currentTime - lastDirectionChangeTime < directionChangeCooldown) {
        return;
    }

    lastDirectionChangeTime = currentTime;

    // Define key codes for directions
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

   // Check the current movement direction
    const goingUp = yVelocity === -unitSize;
    const goingDown = yVelocity === unitSize;
    const goingRight = xVelocity === unitSize;
    const goingLeft = xVelocity === -unitSize;

    let newDirection;

   // Determine the new direction based on the pressed key
    switch (true) {
        case keyPressed === LEFT && !goingRight:
            newDirection = { x: -unitSize, y: 0 };
            break;
        case keyPressed === UP && !goingDown:
            newDirection = { x: 0, y: -unitSize };
            break;
        case keyPressed === RIGHT && !goingLeft:
            newDirection = { x: unitSize, y: 0 };
            break;
        case keyPressed === DOWN && !goingUp:
            newDirection = { x: 0, y: unitSize };
            break;
    }

    // Change the direction if a valid new direction is found   
    if (newDirection && (newDirection.x !== xVelocity || newDirection.y !== yVelocity)) {
        xVelocity = newDirection.x;
        yVelocity = newDirection.y;
    }
}

// Function to check if the game is over
function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
                running = false;
                break;
    }
    for(let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};

// Function to display game over message
function displayGameOver(){
    ctx.font = "50px MV Boli";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Wasted", gameWidth / 2, gameHeight / 2);
    running = false;
};

//function to reset the game
function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    gameStart();
};
