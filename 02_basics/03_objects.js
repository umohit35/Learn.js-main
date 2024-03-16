// ` ` = string interpolation
//  this. is used when we want to refer to the same object

//*****************************Object*****************************************//

//  singleton (when objects is created using constructor )
// Object.create

// Object literals (when object is created using literals)

const mySum = Symbol("Keyword"); //creating a symbol(unique value)

const JsUser = {
  name: "Mohit",
  [mySum]: "myKeyword", //using a symbol as key in the object
  age: 23,
  gender: "Male",
  city: "Noida",
  email: "myEmail@123.gmail.com",
}; //object created

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser[mySum]); //accessing the symbol

JsUser.email = "testemail203@gmail.com";
// Object.freeze(JsUser); //does not allow to change the value
JsUser.email = "testsssemail203@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello users");
}; //declaration of  function

JsUser.greeting2 = function () {
  console.log(`Hello users, ${this.name}`);
};

console.log(JsUser.greeting()); //calling the function
console.log(JsUser.greeting2());
