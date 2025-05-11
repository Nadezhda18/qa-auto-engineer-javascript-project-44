#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../scr/cli.js';

const getRandomNumber = (max, min) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const getRandomSym = (elements) => {
  const randomSymbol = elements[Math.floor(Math.random() * elements.length)];
  return randomSymbol;
};

const symbols = ['+', '-', '*'];

const brainCalc = (name) => {
  const 
  console.log('What is the result of the expression?');
  let numberOfCorrectAnsf = 0;
  while (numberOfCorrectAnsf !== 3) {
    const number = getRandomNumber(0, 100);
    const symbol = getRandomSym(symbols);
    console.log(`\nQuestion: ${number} ${symbol} ${number}`);
    const answer = readlineSync.question('Your answer: ');
  }

};

export default brainCalc;
