const result = document.querySelector('.result')
const userScore = document.querySelector('#user-score')
const cpuScore = document.querySelector('#cpu-score')

let userScoreNumber = 0
let cpuScoreNumber = 0

const playUser = (userChoice) => {
    playTheGame(userChoice, playCpu())

}

const playCpu = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (user, cpu) => {

    console.log('Jogador: ' + user + 'CPU: ' + cpu)

    if (user === cpu) {
        result.innerHTML = "Empatou"
    } else if (
        (user === 'paper' && cpu === 'rock') ||
        (user === 'rock' && cpu === 'scissors') ||
        (user === 'scissors' && cpu === 'paper')
    ) {
        userScoreNumber++
        userScore.innerHTML = userScoreNumber
        result.innerHTML = "Vitória!"
    } else {
        cpuScoreNumber++
        cpuScore.innerHTML = cpuScoreNumber
        result.innerHTML = "CPU venceu :("
    }
}
