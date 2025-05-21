import { playGame } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const isEven = number => number % 2 === 0 // определение четности числа

const questionOfChallenge = 'Answer "yes" if the number is even, otherwise answer "no".'

const makeMathChallenge = () => {
  const number = getRandomNumber(0, 100)
  const question = number
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return {
    question,
    correctAnswer,
  }
}

const findEvenNumber = () => {
  playGame(questionOfChallenge, makeMathChallenge)
}

export { findEvenNumber }
