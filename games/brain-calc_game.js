import readlineSync from 'readline-sync'

const getRandomNumber = (max, min) => {
  const b = Math.floor(Math.random() * (max - min + 1)) + min
  return b
}
export { getRandomNumber }

const getRandomSym = (elements) => {
  const randomSymbol = elements[Math.floor(Math.random() * elements.length)]
  return randomSymbol
}
export { getRandomSym }

const brainCalc = (name) => {
  const symbols = ['+', '-', '*']
  console.log('What is the result of the expression?')
  let numberOfCorrectAnsf = 0
  while (numberOfCorrectAnsf !== 3) {
    const number1 = getRandomNumber(0, 100)
    const number2 = getRandomNumber(0, 100)
    const symbol = getRandomSym(symbols)
    console.log(`\nQuestion: ${number1} ${symbol} ${number2}`)
    const answer = readlineSync.question('Your answer: ')
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

    if (Number(answer) === correctAnswer) {
      console.log('Correct!')
      numberOfCorrectAnsf += 1
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
export { brainCalc }
