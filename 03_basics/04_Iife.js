// Immediately Invoked Function Expression (IIFE)
 
(function data(){
    console.log(`DB CONNECTED`);
})(); // named Iife function

// ("function definition")("execution call")

//to remove global scope pollution or variables or functions for the function we use IIFE
// IIFE is a function which gets executed immediately

// using arrow function 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); // printing variables using IIFE
} )('mohit'); // unnamed Iife function