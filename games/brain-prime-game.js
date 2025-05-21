import { playGame } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const isPrime = (number) => {
  const squareRootOfNumber = Math.sqrt(number)
  for (let i = 2; i <= squareRootOfNumber; i += 1) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const questionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no"'

const getTheGame = () => {
  const number = getRandomNumber(1, 100)
  const isNumberPrime = isPrime(number)
  let correctAnswer = ''
  if (isNumberPrime === true) {
    correctAnswer = 'yes'
  }
  else {
    correctAnswer = 'no'
  }

  const question = number
  return {
    question,
    correctAnswer,
  }
}

const findPrimeNumber = () => {
  playGame(questionOfGame, getTheGame)
}

export { findPrimeNumber }
