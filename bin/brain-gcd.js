#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../scr/cli.js';

const getMaxDivider = (a, b) => {
  const dividers = [];
  for (let i = 1; i <= Math.min(a, b); i += 1) {
    const result1 = a % i;
    const result2 = b % i;
    if (result1 === 0 && result2 === 0) {
      dividers.push(i);
    }
  } return Number(dividers.at(-1));
};

const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const brainGcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  let numberOfCorrectAnsf = 0;
  while (numberOfCorrectAnsf !== 3) {
    const number1 = getRandomNumber(0, 100);
    const number2 = getRandomNumber(0, 100);
    const correctAnswer = getMaxDivider(number1, number2);
    console.log(`\nQuestion: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const answerNumber = Number(answer);
    if (answerNumber === correctAnswer) {
      console.log('Correct!');
      numberOfCorrectAnsf += 1;
    }
    if (answerNumber !== correctAnswer) {
      (console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`));
    }
  } return console.log(`Congratulations, ${name}!`);
};

export default brainGcd;

brainGcd(userName());

