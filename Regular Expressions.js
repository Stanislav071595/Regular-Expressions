/* Regular Expressions */
________________________________________

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
________________________________________

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo is hiding/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
________________________________________

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
________________________________________

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
________________________________________

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
________________________________________

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
________________________________________

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
________________________________________

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
________________________________________

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
________________________________________

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
________________________________________

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
________________________________________

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);
________________________________________

// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
________________________________________

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
________________________________________

let reCriminals = /C+/; // Change this line
________________________________________

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
________________________________________

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
________________________________________

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/ig; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
________________________________________

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
________________________________________

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/ig; // Change this line
let result = movieName.match(numRegex).length;
________________________________________

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/ig; // Change this line
let result = movieName.match(noNumRegex).length;
________________________________________

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)
________________________________________

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/ig; // Change this line
let result = sample.match(countWhiteSpace);
________________________________________

