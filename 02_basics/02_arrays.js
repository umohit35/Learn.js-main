const marvel_heros = ["Ironmam", "Thor", "Hulk"];
const dc_heros = ["Batmam", "Flash", "Superman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros); // combines two arrays together
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // another way to combine twi arrays
// console.log(all_new_heros);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 5, [4, 3]]]; //array with multiple sub arrays
const arr2 = arr.flat(Infinity); //combines all the sub arrays into one array array

// console.log(arr);
//  console.log(arr2);

// console.log(Array.isArray("Mohit")); //checks for the array
// console.log(Array.from("Mohit")); // converts the string into an array

let score1 = 200;
let score2 = 300;
let score3 = 400;

// console.log(Array.of(score1, score2, score3)); // another way of creating an array
