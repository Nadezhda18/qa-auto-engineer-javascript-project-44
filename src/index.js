import readlineSync from 'readline-sync'
import userName from './cli.js'

const gamesStructure = (questionOfGame, gameProcess) => {
  userName()
  console.log(questionOfGame)
  let numberOfCorrectAnsf = 0
  while (numberOfCorrectAnsf !== 3) {
    const { question, correctAnswer } = gameProcess()

    console.log(`Question: ${question}`)
    const answer = Number(readlineSync.question('Your answer: '))

    if (answer === correctAnswer) {
      numberOfCorrectAnsf += 1
      console.log('Correct!')
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

export default gamesStructure
