import { gamesStructure } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const createProgression = () => {
  const seriesOfNumbers = []
  const diffOfProgr = getRandomNumber(1, 10)
  const firstNumber = getRandomNumber(0, 70)
  for (let i = 0; i < getRandomNumber(5, 11); i += 1) {
    seriesOfNumbers[i] = firstNumber + i * diffOfProgr
  }
  return seriesOfNumbers
}

const questionOfGame = 'What number is missing in the progression?'

const gameProcess = () => {
  const seriesOfNumbers = createProgression()
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
  gamesStructure(questionOfGame, gameProcess)
}

export { findMissingNumber }
