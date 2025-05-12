#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../scr/cli.js';

const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const isPrime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  let numberOfCorrectAnsf = 0;
  while (numberOfCorrectAnsf !== 3) {
    const dividers = [];
    const number = getRandomNumber(2, 100);
    for (let i = 1; i <= 100; i += 1) {
      if (number % i === 0) {
        dividers.push(i);
      }
    }
    let correctAnswer = '';
    if (dividers.length === 2 && dividers[0] === 1 && dividers[1] === number) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    console.log(`\nQuestion: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      numberOfCorrectAnsf += 1;
    }
    if (answer !== correctAnswer) {
      (console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`));
    }
  } return console.log(`Congratulations, ${name}!`);
};

export default isPrime;

isPrime(userName());
