import { gamesStructure } from '../src/index.js'
import { getRandomNumber } from '../src/index.js'

const findDividers = (number) => { // функция для поиска делителей определенного числа
  const dividers = []
  for (let i = 1; i <= 100; i += 1) {
    if (number % i === 0) {
      dividers.push(i)
    }
  }
  return dividers
}

const questionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no"'

const gameProcess = () => {
  const number = getRandomNumber(1, 100)
  const dividers = findDividers(number)
  let correctAnswer = ''
  if (dividers.length === 2 && dividers[0] === 1 && dividers[1] === number) {
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
  gamesStructure(questionOfGame, gameProcess)
}

export { findPrimeNumber }
