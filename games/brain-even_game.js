import { gamesStructureForStr } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const questionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".'

const gameProcess = () => {
  const a = getRandomNumber(0, 100)
  const question = a
  let correctAnswer
  if (a % 2 !== 0) {
    correctAnswer = 'no'
  }
  if (a % 2 === 0) {
    correctAnswer = 'yes'
  }
  return {
    question,
    correctAnswer,
  }
}

const brainEven = () => {
  gamesStructureForStr(questionOfGame, gameProcess)
}

export { brainEven }
