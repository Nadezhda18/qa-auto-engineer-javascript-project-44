import readlineSync from 'readline-sync'
import userName from './cli.js'

const getRandomNumber = (max, min) => {
  const b = Math.floor(Math.random() * (max - min + 1)) + min
  return b
}

export { getRandomNumber }

const gamesStructureForNumb = (questionOfGame, gameProcess) => { // для числовых ответов
  const name = userName()
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
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export { gamesStructureForNumb }

const gamesStructureForStr = (questionOfGame, gameProcess) => { // для строчных ответов
  const name = userName()
  console.log(questionOfGame)
  let correctAnswersCount = 3
  for (let i = 0; i <= correctAnswersCount; i += 1) {
    const { question, correctAnswer } = gameProcess()

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer === correctAnswer) {
      correctAnswersCount += 1
      console.log('Correct!')
    }
    else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export { gamesStructureForStr }
