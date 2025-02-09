/* 
Codecademy Full-Stack Program
Portfolio Project: Mixed Messages
Goal: Generate randomized messages with at least 3 unique components
*/

//IMPORTS
const { verbs, nouns, adjectives, adverbs } = require("./words"); //Import word lists
const {
  toKillAMockingbird,
  mrRosewater,
  onTheRoad,
  chronologyOfWater,
  dune,
} = require("./stories"); //Import story exerpts
const readlineSync = require("readline-sync"); //Import readline-sync module

// Store stories in an object for easy selection
const stories = {
  1: toKillAMockingbird,
  2: mrRosewater,
  3: onTheRoad,
  4: chronologyOfWater,
  5: dune,
};

//FUNCTIONS
//Pick a random word from a list
const pickWord = (wordList) =>
  wordList[Math.floor(Math.random() * wordList.length)];

// Function to replace placeholders in a story
function generateStory(template) {
  return template.replace(
    /\{(NOUN|VERB|ADJECTIVE|ADVERB)\}/g,
    (match, partOfSpeech) => {
      switch (partOfSpeech) {
        case "NOUN":
          return pickWord(nouns);
        case "VERB":
          return pickWord(verbs);
        case "ADJECTIVE":
          return pickWord(adjectives);
        case "ADVERB":
          return pickWord(adverbs);
        default:
          return match;
      }
    }
  );
}

//USER INPUT
const choice = readlineSync.question("Choose a story (1-5): ");

if (choice >= 1 && choice <= 5) {
  console.log(generateStory(stories[choice]));
} else {
  console.log("Invalid selection.");
}
