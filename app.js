document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [{
            name: 'liz',
            img: 'images/Liz.png'
        },
        {
            name: 'liz',
            img: 'images/Liz.png'
        },
        {
            name: 'jack',
            img: 'images/Jack.png'
        },
        {
            name: 'jack',
            img: 'images/Jack.png'
        },
        {
            name: 'kenneth',
            img: 'images/Kenneth.png'
        },
        {
            name: 'kenneth',
            img: 'images/Kenneth.png'
        },
        {
            name: 'dotcom',
            img: 'images/DotCom.png'
        },
        {
            name: 'dotcom',
            img: 'images/DotCom.png'
        },
        {
            name: 'tracy',
            img: 'images/Tracy.png'
        },
        {
            name: 'tracy',
            img: 'images/Tracy.png'
        },
        {
            name: 'jenna',
            img: 'images/Jenna.png'
        },
        {
            name: 'jenna',
            img: 'images/Jenna.png'
        },
        {
            name: 'toofer',
            img: 'images/Toofer.png'
        },
        {
            name: 'toofer',
            img: 'images/Toofer.png'
        },
        {
            name: 'colleen',
            img: 'images/Colleen.png'
        },
        {
            name: 'colleen',
            img: 'images/Colleen.png'
        },
        {
            name: 'frank',
            img: 'images/Frank.png'
        },
        {
            name: 'frank',
            img: 'images/Frank.png'
        },
        {
            name: 'grizz',
            img: 'images/Grizz.png'
        },
        {
            name: 'grizz',
            img: 'images/Grizz.png'
        },
        {
            name: 'pete',
            img: 'images/Pete.png'
        },
        {
            name: 'pete',
            img: 'images/Pete.png'
        },
        {
            name: 'jonathan',
            img: 'images/Jonathan.png'
        },
        {
            name: 'jonathan',
            img: 'images/Jonathan.png'
        },
    ]

    const quoteArray = [
        'Science is my most favorite subject, especially the Old Testament  – Kenneth',
        'Never follow a hippie to a second location – Jack',
        'I have to talk to Rachel Maddow. Only one of us can have this haircut - Jack',
        'There was a cyclone in Brooklyn last year. It destroyed two vintage T-shirt shops and a banjo  – Frank',
        'There is no problem in the world that can\'t be solved by throwing money at it. - Jack',
        'Fine, I\'ll set aside my feud with Raven Symone for one day, but she knows what she did - Jenna',
        'Tell her you want her to donate her body to science and you\'re science. Tell her, Jack! - Tracy',
        'I did Big Sister in college. That little girl taught me how to use tampons - Liz',
        'TGS with Tracy Jordan without Tracy Jordan is an oxymoron, like \'liberal government\' or \'female scientist - Jack',
        'Relationships are like sharks, Liz: if you\'re not left with several bite marks after intercourse, then something\'s wrong - Jenna',
        'I\'m sorry I\'m a real woman and not some oversexed New York nympho like those sluts on Everybody Loves Raymond - Liz',
        'A book hasn\'t caused me this much trouble since Where\'s Waldo went to that barber pole factory - Tracy',
        'Lemon, you look terrible, and I once watched you eat oysters while you had a cold - Jack',
        'Miss Lemon, your eyes look like my uncle’s after he would drink from the air conditioner - Kenneth',
        'Blerg! - Liz'
    ]

    cardArray.sort(() => .5 - Math.random())

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var youWon = 'Good god, you did it! Now take your reward: '
    var addP = document.createElement("p")
    var quote = document.createTextNode(newQuote())

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/Back.png')
            card.setAttribute('data-id', i)
            card.setAttribute('class', 'flex-item')
            card.classList.add('shadow')
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/Blank.png')
            cards[optionTwoId].setAttribute('src', 'images/Blank.png')
            cards[optionOneId].classList.remove('shadow')
            cards[optionTwoId].classList.remove('shadow')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/Back.png')
            cards[optionTwoId].setAttribute('src', 'images/Back.png')
        }
        cardsChosen = []
        cardsChosenId = []
        if (cardsWon.length === cardArray.length / 2) {
            grid.classList.add('congrats')
            grid.classList.remove('grid')
            grid.textContent = youWon
            grid.appendChild(addP)
            addP.appendChild(quote)
            addP.classList.add('quote')
            document.querySelector('#footer').classList.add('congrats-footer')
        }
    }

    function newQuote() {
        var randomNumber = Math.floor(Math.random() * (quoteArray.length));
        return quoteArray[randomNumber]
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
})