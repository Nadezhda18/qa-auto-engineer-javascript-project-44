#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../scr/cli.js';

const name = userName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let numberOfCorrectAnsf = 0;

const brainEven = () => {
    const a = Math.random(); 
    const number = readlineSync.question('Question: ' + a);
    const answer = readlineSync.question('Your answer: '); 
    for (let numberOfCorrectAnsf = 0; numberOfCorrectAnsf < 4; numberOfCorrectAnsf += 1) {
        if (number % 2 !== 0 && answer === 'no') {
            numberOfCorrectAnsf += 1;
            return console.log('Correct!');
        } else if (number % 2 !== 0 && answer === 'yes') {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        } else if (number % 2 === 0 && answer === 'yes') {
            numberOfCorrectAnsf += 1;
            return console.log('Correct!');
        } else if (number % 2 === 0 && answer === 'no') {
            return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
        } 
    }
    return numberOfCorrectAnsf;
    
};

if (numberOfCorrectAnsf === 3) {
    return console.log(`Congratulations, ${name}!`)
}

export default brainEven;
