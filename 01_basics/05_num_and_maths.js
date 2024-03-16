const min = 10;
const max = 20;

console.log(Math.random()); //generates a random number between 0 & 9

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
