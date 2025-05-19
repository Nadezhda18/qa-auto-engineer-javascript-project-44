import { gamesStructure } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const defineEven = number => number % 2 === 0 // определение четности числа

const questionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".'

const gameProcess = () => {
  const number = getRandomNumber(0, 100)
  const question = number
  const correctAnswer = defineEven(number) ? 'yes' : 'no'
  return {
    question,
    correctAnswer,
  }
}

const findEvenNumber = () => {
  gamesStructure(questionOfGame, gameProcess)
}

export { findEvenNumber }
