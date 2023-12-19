/* import data */
import JSConfetti from 'js-confetti'
import { data } from "./data.js"

/* varibale */
let word = data[Math.floor(Math.random() * data.length)]
let wordArr = word.toLowerCase().split('')
let input = document.getElementById('user-input')
const wordDisplay = document.getElementById('word-display')

document.addEventListener('submit', handleGuess)

/* function */
function handleGuess(e) {
    e.preventDefault()
    let currentState = []
    let guess = input.value.toLowerCase()
    const guessArr = guess.split('')

    wordArr.forEach(function (letter) {
        if (guessArr.includes(letter)) {
            currentState.push(letter)
        } else {
            currentState.push('-')
        }
    })
    renderGuess(currentState)
    checkWin(currentState.join(''))
    input.value = ''
    
}

function renderSpaces() {
    const wordHtml = wordArr.map(function () {
        return `<span class="letter">-</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}

renderSpaces()

function renderGuess(arr) {
    const wordHtml = arr.map(function (letter) {
        return `<span class="letter">${letter}</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}

function checkWin(guess) {
    if (word === guess) {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            emojis: ['🧑‍🎄', '🎅', '❤️', '🎈'],
            emojiSize: 70,
            confettiNumber: 60,
            confettiRadius: 6,
        })
        jsConfetti.addConfetti()
    }
}


// function reload() {
//     setTimeout(function () {
//     window.location.reload(1)
//     }, 3000)
// }

