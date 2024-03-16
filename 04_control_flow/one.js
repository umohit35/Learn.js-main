// if

// const isUserLoggedIn = true //== is assignment operator 
// const temp = 42;

// if (temp === 42 ) {
//     console.log("less then 50");
// }else {
//     console.log("temp greater then 50");
// }

// console.log("execute");
// comparison check
// <, >, <=, >=, ==, !=, ===(checks for the type as well)

// const score = 200

// if (score >100) {
//     const power = "fly"
//     // console.log("user power is : " + power);
//     console.log(`user power is : ${power}`);
// }

const balance= 1000;

// if (balance > 500) console.log("test"),console.log("test2");
//  if (balance<500){
//     console.log("less than");
//  }else if (balance <750){
//     console.log("less than 750");
//  }else if (balance<900){
//     console.log("less than 900");
//  }else{
//     console.log("greater then 1000");
//  }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInFromEmail||loggedInFromGoogle) {
    console.log("User logged in ");
}