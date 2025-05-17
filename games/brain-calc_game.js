import { gamesStructureForNumb } from '../src/index.js'

const getRandomNumber = (max, min) => {
  const b = Math.floor(Math.random() * (max - min + 1)) + min
  return b
}

const getRandomSym = (elements) => {
  const randomSymbol = elements[Math.floor(Math.random() * elements.length)]
  return randomSymbol
}

const questionOfGame = 'What is the result of the expression?'

const gameProcess = () => {
  const symbols = ['+', '-', '*']
  const number1 = getRandomNumber(0, 100)
  const number2 = getRandomNumber(0, 100)
  const symbol = getRandomSym(symbols)
  const question = `${number1} ${symbol} ${number2}`
  let correctAnswer
  switch (symbol) {
    case '+':
      correctAnswer = number1 + number2
      break
    case '-':
      correctAnswer = number1 - number2
      break
    case '*':
      correctAnswer = number1 * number2
      break
    default:
      correctAnswer = NaN
  }
  return {
    question,
    correctAnswer,
  }
}

const brainCalc = () => {
  gamesStructureForNumb(questionOfGame, gameProcess)
}

export { brainCalc }
