#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../scr/cli.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Answer "yes" if the number is even, otherwise answer "no".');


const brainEven = () => {
  const a = Math.floor((Math.random() * 10));
  const number = readlineSync.question(`Question: ${a} `);
  const answer = readlineSync.question('Your answer: ');
  for (let numberOfCorrectAnsf = 0; numberOfCorrectAnsf < 4; numberOfCorrectAnsf += 1) {
    if (number % 2 !== 0 && answer === 'no') {
      numberOfCorrectAnsf += 1;
      return console.log('Correct!');
    } if (number % 2 !== 0 && answer === 'yes') {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    } if (number % 2 === 0 && answer === 'yes') {
      numberOfCorrectAnsf += 1;
      return console.log('Correct!');
    } if (number % 2 === 0 && answer === 'no') {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    }
  } return numberOfCorrectAnsf;
};
export default brainEven;

brainEven();

