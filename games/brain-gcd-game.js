import { gamesStructureForNumb } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const getMaxDivider = (a, b) => { // расчет максимального общего делителя
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

const questionOfGame = 'Find the greatest common divisor of given numbers.'

const gameProcess = () => {
  const number1 = getRandomNumber(0, 100)
  const number2 = getRandomNumber(0, 100)
  const correctAnswer = getMaxDivider(number1, number2)
  const question = `${number1} ${number2}`
  return {
    question,
    correctAnswer,
  }
}

const findGcd = () => {
  gamesStructureForNumb(questionOfGame, gameProcess)
}

export { findGcd }
