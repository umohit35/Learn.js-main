// denoted with " " or ' '

const name = "Moh"; //way to declare a string with
const repoCount = 10;

// console.log(name + repoCount + "value");//concatenate of a string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //new way to print a string

const gameName = new String("aki"); //another way to declare a string using  new key word
console.log(gameName);
console.log(gameName.__proto__); // to see the prototype

console.log(gameName.length); //to se the length of the string
console.log(gameName.toUpperCase());
console.log(gameName.charAt("2")); //to see the position of the character at specific position
console.log(gameName.indexOf("char")); //to see the index of the character
