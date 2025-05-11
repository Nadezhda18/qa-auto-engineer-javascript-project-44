#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../scr/cli.js';

const getRandomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const brainCalc = (name) => {
  const 
  console.log('What is the result of the expression?');
  let numberOfCorrectAnsf = 0;
  while (numberOfCorrectAnsf !== 3) {
    const a = Math.floor((Math.random() * 100));
    console.log(`\nQuestion: ${a} `);
    const answer = readlineSync.question('Your answer: ');
  }

};

export default brainCalc;
