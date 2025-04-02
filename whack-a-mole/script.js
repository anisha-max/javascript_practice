const square = document.querySelectorAll('.square')
const result = document.querySelector('#result')
const time_left = document.querySelector('#time')
let hitpostion
let currentTime = time_left.textContent

let score = 0
function randomSquare(){
    square.forEach(classname => {
        classname.classList.remove('mole')
    })
    let randomPosition = square[Math.floor((Math.random()*9))]
    randomPosition.classList.add('mole')
    hitpostion= randomPosition.id
}

square.forEach(tile =>{
    tile.addEventListener('mouseup' , ()=>{
        if(tile.id === hitpostion ){
            score = score +1
            result.textContent = score
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare , 1000)
}

function countDown(){
    currentTime--
    time_left .textContent= currentTime

    if(currentTime === 0 ){
        clearInterval(timerId)
        alert("Game Over . Your score is : " + score)
    }
}

let timerId = setInterval(countDown ,1000)

moveMole()