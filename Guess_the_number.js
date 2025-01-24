let ran_num = parseInt((Math.random() * 100))
const user = document.querySelector("#user_num")
const msg = document.querySelector('#msg')
const form = document.querySelector("form")
const remaining = document.querySelector("#remaining")
const user_display = document.querySelector(".user_display")
const prev = document.querySelector("#prev")
const start_new_game = document.querySelector("#new_game_btn")
let total_guess = 1
let prev_guess = []
let play = true

if (play) {

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(ran_num)
        const user_num = user.value
        check_valid(user_num)


    })
}

function check_valid(user_num) {

    if (user_num < 0 || user_num > 100 || user_num == "" || isNaN(user_num)) {
        msg.innerHTML = "plaese enter a valid number "
        user.value = ""
    } else {
        if (total_guess == 10) {
            user.setAttribute('disabled', "")
            end_game()
        }
        else {
            console.log(user_num)

            total_guess++
            remaining.innerHTML = (10 - (total_guess - 1))
            check_right(user_num)
        }

    }
}

function check_right(user_num) {
    if (user_num === ran_num) {
        msg.innerHTML = "you won "

    } else {
        console.log(user_num)
        console.log(`my ${user_num}`)
        msg.innerHTML = "Try again"
        prev_guess += (`${user_num} ,`)
        prev.innerHTML = prev_guess
        user.value = ""

    }
}

function clear() {
    user.value = ""

}


function end_game() {
    user_display.classList.add("d-none");
    form.classList.add("disabled");
    start_new_game.classList.remove("d-none")

    new_game()

}

function new_game() {
    clear()
    ran_num = parseInt((Math.random() * 100))
    total_guess = 1
    prev_guess = []
    remaining.innerHTML = (10 - (total_guess - 1))
    start_new_game.addEventListener('click', () => {


        user_display.classList.remove("d-none");
        user.removeAttribute("disabled")
    })
}



