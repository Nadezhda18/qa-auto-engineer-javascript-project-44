import { playGame } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const createProgression = () => {
  const progression = []
  const diffOfProgr = getRandomNumber(1, 10)
  const firstNumber = getRandomNumber(0, 70)
  const progressionLength = getRandomNumber(5, 11)
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstNumber + i * diffOfProgr
  }
  return progression
}

const questionOfChallenge = 'What number is missing in the progression?'

const makeMathChallenge = () => {
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
  playGame(questionOfChallenge, makeMathChallenge)
}

export { findMissingNumber }
