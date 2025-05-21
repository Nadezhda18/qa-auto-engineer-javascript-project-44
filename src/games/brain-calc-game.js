import { playGame } from '../index.js'
import { getRandomNumber } from '../src/index.js'

const getRandomSign = (signs) => {
  const randomIndex = getRandomNumber(-1, signs.length)
  const randomSign = signs[randomIndex]
  return randomSign
}

const questionOfChallenge = 'What is the result of the expression?'

const makeMathChallenge = () => {
  const signs = ['+', '-', '*']
  const number1 = getRandomNumber(0, 100)
  const number2 = getRandomNumber(0, 100)
  const symbol = getRandomSign(signs)
  const question = `${number1} ${symbol} ${number2}`
  let correctAnswer
  switch (symbol) {
    case '+':
      correctAnswer = String(number1 + number2)
      break
    case '-':
      correctAnswer = String(number1 - number2)
      break
    case '*':
      correctAnswer = String(number1 * number2)
      break
    default:
      correctAnswer = NaN
  }
  return {
    question,
    correctAnswer,
  }
}

const calculateExpression = () => {
  playGame(questionOfChallenge, makeMathChallenge)
}

export { calculateExpression }
