import { gamesStructureForStr } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const questionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no"'

const gameProcess = () => {
  const dividers = []
  const number = getRandomNumber(2, 100)
  for (let i = 1; i <= 100; i += 1) {
    if (number % i === 0) {
      dividers.push(i)
    }
  }
  let correctAnswer = ''
  if (dividers.length === 2 && dividers[0] === 1 && dividers[1] === number) {
    correctAnswer = 'yes'
  }
  else {
    correctAnswer = 'no'
  }

  const question = number
  return {
    question,
    correctAnswer,
  }
}

const isPrime = () => {
  gamesStructureForStr(questionOfGame, gameProcess)
}

export { isPrime }
