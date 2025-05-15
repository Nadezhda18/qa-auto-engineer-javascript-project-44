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

const getMaxDivider = (a, b) => {
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
export { getMaxDivider }

const brainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let numberOfCorrectAnsf = 0
  while (numberOfCorrectAnsf !== 3) {
    const a = getRandomNumber(0, 100)
    console.log(`\nQuestion: ${a} `)
    let answer = readlineSync.question('Your answer: ')
    if (answer !== 'no' && answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Your answer can only be 'yes' or 'no'.\nLet's try again, ${name}!`)
      answer = readlineSync.question('Your answer: ').toLowerCase().trim()
    }
    if (a % 2 !== 0 && answer === 'no') {
      console.log('Correct!')
      numberOfCorrectAnsf += 1
    }
    if (a % 2 === 0 && answer === 'yes') {
      console.log('Correct!')
      numberOfCorrectAnsf += 1
    }
    if ((a % 2 !== 0 && answer === 'yes') || (a % 2 === 0 && answer === 'no')) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
export { brainEven }

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

const brainGcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.')
  let numberOfCorrectAnsf = 0
  while (numberOfCorrectAnsf !== 3) {
    const number1 = getRandomNumber(0, 100)
    const number2 = getRandomNumber(0, 100)
    const correctAnswer = getMaxDivider(number1, number2)
    console.log(`\nQuestion: ${number1} ${number2}`)
    const answer = readlineSync.question('Your answer: ')
    const answerAsNumber = Number(answer)
    if (answerAsNumber === correctAnswer) {
      console.log('Correct!')
      numberOfCorrectAnsf += 1
    }
    if (answerAsNumber !== correctAnswer) {
      (console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`))
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
export { brainGcd }

const isPrime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"')
  let numberOfCorrectAnsf = 0
  while (numberOfCorrectAnsf !== 3) {
    const dividers = []
    const number = getRandomNumber(2, 100)
    for (let i = 1; i <= 100; i += 1) {
      if (number % i === 0) {
        dividers.push(i)
      }
    }
    let correctAnswer = ''
    if (dividers.length === 2 && dividers[0] === 1 && dividers[1] === number) {
      correctAnswer = 'yes'
    }
    else {
      correctAnswer = 'no'
    }

    console.log(`\nQuestion: ${number}`)
    const answer = readlineSync.question('Your answer: ')
    if (answer === correctAnswer) {
      console.log('Correct!')
      numberOfCorrectAnsf += 1
    }
    if (answer !== correctAnswer) {
      (console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`))
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
export { isPrime }

const progression = (name) => {
  console.log('What number is missing in the progression?')
  let numberOfCorrectAnsf = 0
  while (numberOfCorrectAnsf !== 3) {
    const seriesOfNumbers = []
    const diffOfProgr = getRandomNumber(1, 10)
    const firstNumber = getRandomNumber(0, 70)
    for (let i = 0; i < getRandomNumber(5, 11); i += 1) {
      seriesOfNumbers[i] = firstNumber + i * diffOfProgr
    }
    const hiddenNumber = getRandomNumber(0, seriesOfNumbers.length - 1)
    const correctAnswer = Number(seriesOfNumbers[hiddenNumber])
    seriesOfNumbers[hiddenNumber] = '..'
    console.log(`\nQuestion: ${seriesOfNumbers.join(' ')}`)
    const answer = Number(readlineSync.question('Your answer: '))
    if (answer === correctAnswer) {
      console.log('Correct!')
      numberOfCorrectAnsf += 1
    }
    if (answer !== correctAnswer) {
      (console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`))
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
export { progression }
