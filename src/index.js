import readlineSync from 'readline-sync'
import userName from './cli.js'

const getRandomNumber = (max, min) => {
  const b = Math.floor(Math.random() * (max - min + 1)) + min
  return b
}

export { getRandomNumber }

const getThreeCorrectAnswers = (questionOfGame, getTheGame) => {
  const name = userName()
  console.log(questionOfGame)
  const correctAnswersCount = 3
  for (let i = 1; i <= correctAnswersCount; i += 1) {
    const { question, correctAnswer } = getTheGame()

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export { getThreeCorrectAnswers }
