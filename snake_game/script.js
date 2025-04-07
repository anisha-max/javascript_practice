const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

let box = 20
let canvasSize = 400
let score = 0

let snake = []
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

let food = {
    x: Math.floor(Math.random() * (canvasSize / box)) * box,
    y: Math.floor(Math.random() * (canvasSize / box)) * box
}

let direction
document.addEventListener("keydown", setDirection)

function setDirection(event) {
    if (event.key === "ArrowLeft" && direction != "RIGHT") direction = "LEFT"
    else if (event.key === "ArrowRight" && direction != "LEFT") direction = "RIGHT"
    else if (event.key === "ArrowUp" && direction != "DOWN") direction = "UP"
    else if (event.key === "ArrowDown" && direction != "UP") direction = "DOWN"
}

function draw() {
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, canvasSize, canvasSize)

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "lime" : "green"
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
    }
    ctx.fillStyle = "red"
    ctx.fillRect(food.x, food.y, box, box)
    let snakeX = snake[0].x
    let snakeY = snake[0].y


    if (direction === "LEFT") snakeX -= box
    else if (direction === "RIGHT") snakeX += box
    else if (direction === "UP") snakeY -= box
    else if (direction === "DOWN") snakeY += box

    if (snakeX === food.x && snakeY === food.y) {
        score++
        food = {
            x: Math.floor(Math.random() * (canvasSize / box)) * box,
            y: Math.floor(Math.random() * (canvasSize / box)) * box
        }
    } else {
        snake.pop()
    }
    const newHead = { x: snakeX, y:snakeY }

    if (snakeX < 0 || snakeY < 0 || snakeX >= canvasSize || snakeY >= canvasSize || collision(newHead, snake)) {
        clearInterval(game)
        alert("Game Over! Score: " + score);
        return;
    }

    snake.unshift(newHead)
    ctx.fillStyle = "white"
    ctx.font = "20px Arial"
    ctx.fillText("Score :" + score, 10, 20)
}

function collision(head, array) {
    return array.some(segment => head.x === segment.x && head.y === segment.y)
}

let game = setInterval(draw, 200)
