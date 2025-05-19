import { gamesStructure } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const createProgression = () => {
  const progression = []
  const diffOfProgr = getRandomNumber(1, 10)
  const firstNumber = getRandomNumber(0, 70)
  for (let i = 0; i < getRandomNumber(5, 11); i += 1) {
    progression[i] = firstNumber + i * diffOfProgr
  }
  return progression
}

const questionOfGame = 'What number is missing in the progression?'

const gameProcess = () => {
  const progression = createProgression()
  const hiddenNumber = getRandomNumber(0, progression.length - 1)
  const correctAnswer = String(progression[hiddenNumber])
  progression[hiddenNumber] = '..'
  const question = progression.join(' ')
  return {
    question,
    correctAnswer,
  }
}

const findMissingNumber = () => {
  gamesStructure(questionOfGame, gameProcess)
}

export { findMissingNumber }
