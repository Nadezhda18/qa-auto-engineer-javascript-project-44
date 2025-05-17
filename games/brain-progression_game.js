import gamesStructure from '../src'

const getRandomNumber = (max, min) => {
  const b = Math.floor(Math.random() * (max - min + 1)) + min
  return b
}
export { getRandomNumber }

const gameProcess = () => {
  const questionOfGame = 'What number is missing in the progression?'
  const seriesOfNumbers = []
  const diffOfProgr = getRandomNumber(1, 10)
  const firstNumber = getRandomNumber(0, 70)
  for (let i = 0; i < getRandomNumber(5, 11); i += 1) {
    seriesOfNumbers[i] = firstNumber + i * diffOfProgr
  }
  const hiddenNumber = getRandomNumber(0, seriesOfNumbers.length - 1)
  const correctAnswer = Number(seriesOfNumbers[hiddenNumber])
  seriesOfNumbers[hiddenNumber] = '..'
  const question = seriesOfNumbers.join(' ')
  return {
    question,
    correctAnswer,
    questionOfGame,
  }
}

const brainProgression = () => {
  gamesStructure(questionOfGame, gameProcess)
}

export { brainProgression }
