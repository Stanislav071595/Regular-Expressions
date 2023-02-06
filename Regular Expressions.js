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

