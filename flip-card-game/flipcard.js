document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: "salad",
            img: "images/salad.png"
        },
        {
            name: "salad",
            img: "images/salad.png"
        },
        {
            name: "pizza",
            img: "images/pizza.png"
        },
        {
            name: "pizza",
            img: "images/pizza.png"
        },
        {
            name: "tamato",
            img: "images/tamato.png"
        },
        {
            name: "tamato",
            img: "images/tamato.png"
        },
        {
            name: "coffee",
            img: "images/coffee.png"
        },
        {
            name: "coffee",
            img: "images/coffee.png"
        },
        {
            name: "burger",
            img: "images/burger.png"
        },
        {
            name: "burger",
            img: "images/burger.png"
        },
        {
            name: "smile",
            img: "images/smile.png"
        },
        {
            name: "smile",
            img: "images/smile.png"
        },
    ]

    cardArray.sort(( ) => 0.5- Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardChosen = []
    let cardChosenId = []
    let cardsWon = []


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.classList.add("height")
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    function flipcard() {
        const cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch(){
        let cards = document.querySelectorAll('img')
        let optionone = cardChosenId[0]
        let optiontwo = cardChosenId[1]
        if(cardChosen[0] === cardChosen[1]){
            alert('You found a match')
            cards[optionone].setAttribute('src' , 'images/white.png')
            cards[optiontwo].setAttribute('src' , 'images/white.png')
            cardsWon.push(cardChosen)
        }else{
            cards[optionone].setAttribute('src' , 'images/blank.png')
            cards[optiontwo].setAttribute('src' , 'images/blank.png')
            alert("Try again")
        }
        cardChosen=[]
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found all cards.'
        }
    }






    createBoard()

})