#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const progression = (name) => {
  console.log('What number is missing in the progression?');
  let numberOfCorrectAnsf = 0;
  while (numberOfCorrectAnsf !== 3) {
    const seriesOfNumbers = [];
    const diffOfProgr = getRandomNumber(1, 10);
    const firstNumber = getRandomNumber(0, 70);
    for (let i = 0; i < getRandomNumber(5, 11); i += 1) {
      seriesOfNumbers[i] = firstNumber + i * diffOfProgr;
    }
    const hiddenNumber = getRandomNumber(0, seriesOfNumbers.length - 1);
    const correctAnswer = Number(seriesOfNumbers[hiddenNumber]);
    seriesOfNumbers[hiddenNumber] = '..';
    console.log(`\nQuestion: ${seriesOfNumbers.join(' ')}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
      console.log('Correct!');
      numberOfCorrectAnsf += 1;
    }
    if (answer !== correctAnswer) {
      (console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`));
    }
  } return console.log(`Congratulations, ${name}!`);
};

export default progression;

progression(userName());
