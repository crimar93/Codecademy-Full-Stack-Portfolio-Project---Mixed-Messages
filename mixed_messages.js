/* 
Codecademy Full-Stack Program
Portfolio Project: Mixed Messages
Goal: Generate randomized messages with at least 3 unique components
*/

//Imports
const { verbs, nouns, adjectives, adverbs } = require('./words'); //Import word lists

//Functions
const pickWord = wordList => wordList[Math.floor(Math.random() * wordList.length)]; //Pick a random word from a list

//Test code
console.log(pickWord(nouns));
