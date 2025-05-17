import readlineSync from 'readline-sync'

const getRandomNumber = (max, min) => {
  const b = Math.floor(Math.random() * (max - min + 1)) + min
  return b
}
export { getRandomNumber }

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
