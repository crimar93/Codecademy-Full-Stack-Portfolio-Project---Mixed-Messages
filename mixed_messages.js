/* 
Codecademy Full-Stack Program
Portfolio Project: Mixed Messages
Goal: Generate randomized messages with at least 3 unique components
*/

//Imports
const { verbs, nouns, adjectives, adverbs } = require('./words'); //Import word lists
const stories = require('./stories'); //Import story exerpts

//Functions
const pickWord = wordList => wordList[Math.floor(Math.random() * wordList.length)]; //Pick a random word from a list

// Function to replace placeholders in a story
function generateStory(template) {
    return template.replace(/\{(NOUN|VERB|ADJECTIVE|ADVERB)\}/g, (match, partOfSpeech) => {
        switch (partOfSpeech) {
            case "NOUN": return pickWord(nouns);
            case "VERB": return pickWord(verbs);
            case "ADJECTIVE": return pickWord(adjectives);
            case "ADVERB": return pickWord(adverbs);
            default: return match;
        }
    });
}


//Test code
// Select a random story and generate a filled-in version
const completedStory = generateStory(toKillAMockingbird);
console.log(completedStory);
