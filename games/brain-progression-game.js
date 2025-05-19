import { gamesStructureForStr } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const questionOfGame = 'What number is missing in the progression?'

const gameProcess = () => {
  const seriesOfNumbers = []
  const diffOfProgr = getRandomNumber(1, 10)
  const firstNumber = getRandomNumber(0, 70)
  for (let i = 0; i < getRandomNumber(5, 11); i += 1) {
    seriesOfNumbers[i] = firstNumber + i * diffOfProgr
  }
  const hiddenNumber = getRandomNumber(0, seriesOfNumbers.length - 1)
  const correctAnswer = String(seriesOfNumbers[hiddenNumber])
  seriesOfNumbers[hiddenNumber] = '..'
  const question = seriesOfNumbers.join(' ')
  return {
    question,
    correctAnswer,
  }
}

const findMissingNumber = () => {
  gamesStructureForStr(questionOfGame, gameProcess)
}

export { findMissingNumber }
