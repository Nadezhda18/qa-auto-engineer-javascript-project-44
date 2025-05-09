#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../scr/cli.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let numberOfCorrectAnsf = 0;

const brainEven = () => {
  const a = Math.floor((Math.random() * 10));
  console.log(`Question: ${a} `);
  const answer = readlineSync.question('Your answer: ');
  while (numberOfCorrectAnsf < 4) {
    if (a % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      numberOfCorrectAnsf += 1;
    } if (a % 2 !== 0 && answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    } if (a % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      numberOfCorrectAnsf += 1;
    } if (a % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    }
  } return console.log(`Congratulations, ${name}!`);
};
export default brainEven;

brainEven();

