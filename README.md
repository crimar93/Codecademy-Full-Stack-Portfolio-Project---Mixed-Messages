# Mixed Messages
## Codecademy Full Stack Program: Portfolio Project

## Description
The goal of this project was to create a Javascript code that can generate randomized messages with at least 3 unique components. It was an opportunity to practice creating functions and writing outputs to the Terminal. I also used this project to learn how to import/export
data from other files and how to request and use user input. For my project, I created several arrays of words (nouns, verbs, adjectives, and adverbs) in one file, and another file with 5 famous novel quotes. In each quote, multiple words have been changed to placeholder values
based on their part of speech. When the user runs the code, they are prompted to choose a story, at which point their story is output to the Terminal with the placeholder words replaced by words chosen at random from the matching word array (i.e. {NOUN} placeholder is replaced
by a random selection from the noun array).

## Features
1. Randomized word replacements are chosen from predefined lists
2. Supports different parts of speech (nouns, verbs, adjectives, adverbs)
3. The word arrays and story strings are collectively held in separate files to improve readability of the main code
4. Utilized CommonJS import/export commands to utilize those variables in the main code
5. Wrote a function that takes a word array as a parameter and returns a random word from that array
6. Wrote a function using .replace() that goes through the chosen quote and uses a switch case to replace placeholder terms with randomized words from the appropriate array
7. Requests user input to select a quote, then returns that quote with the updated quote using the function described in #6
8. Users can choose from multiple story templates

## How to Use
1. Clone the repository: git clone https://github.com/crimar93/mixed-messages.git
2. Navigate into the project directory: mixed-messages
3. Install dependencies (if needed): npm install
4. Run the program: node mixed_messages.js
5. Follow the prompts to select a story and the program will output an updated quote with random words

## Technologies
- JavaScript (Node.js)
- Readline-sync for user input
- CommonJS module system

## References
- Quotes: https://thoughtcatalog.com/koty-neelis/2015/06/31-of-the-most-beautiful-and-profound-passages-in-literature-youll-want-to-read-over-and-over-again/ 
