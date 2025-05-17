import { gamesStructureForNumb } from '../src/index.js'

const getRandomNumber = (max, min) => {
  const b = Math.floor(Math.random() * (max - min + 1)) + min
  return b
}

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
  gamesStructureForNumb(questionOfGame, gameProcess)
}

export { brainEven }
