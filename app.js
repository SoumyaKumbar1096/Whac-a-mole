const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let molePosition 
let currentTime = 60

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    
    randomSquare.classList.add('mole')
    molePosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == molePosition){
            result++
            score.innerHTML = `Score: ${result}`
            molePosition = null
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}

moveMole() 

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        alert(`GAME OVER! Your final score is: ${result}`)
    }
}

let countDownTimerId = setInterval(countDown, 1000)