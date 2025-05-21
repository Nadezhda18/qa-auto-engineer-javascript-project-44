import { playGame } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const getGCD = (a, b) => { // расчет наибольшего общего делителя
  const dividers = []
  for (let i = 1; i <= Math.min(a, b); i += 1) {
    const result1 = a % i
    const result2 = b % i
    if (result1 === 0 && result2 === 0) {
      dividers.push(i)
    }
  }
  return Number(dividers.at(-1))
}

const questionOfChallenge = 'Find the greatest common divisor of given numbers.'

const makeMathChallenge = () => {
  const number1 = getRandomNumber(0, 100)
  const number2 = getRandomNumber(0, 100)
  const correctAnswer = String(getGCD(number1, number2))
  const question = `${number1} ${number2}`
  return {
    question,
    correctAnswer,
  }
}

const findGcd = () => {
  playGame(questionOfChallenge, makeMathChallenge)
}

export { findGcd }
