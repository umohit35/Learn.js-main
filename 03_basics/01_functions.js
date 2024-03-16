// functions = a code covered within a package \

function sayMyName() {
  console.log("M");
  console.log("O");
  console.log("H");
  console.log("I");
  console.log("T");
} //function created

// sayMyName; //function reference
// sayMyName(); //function execution

// function addNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}

//   addNumbers(10, 20);

const result = addNumbers(10, 20);
// console.log("Return :", result);

function login(username) {
  //   if (username === undefined)
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// const res = login("mohit");
// console.log(res);
// console.log(login());
// console.log(login("mohit"));

function calculatePrice(...num1) {
  return num1;
} //rest is used to pass multiple values to the function

// console.log(calculatePrice(200, 300, 400, 500)); //rest return the array of value

const users = {
  name: "Mohit",
  age: 23,
  gender: "Male",
  city: "Noida",
  email: "myEmail@123.gmail.com",
};

function handleOject(anyObject) {
  console.log(`Username is ${anyObject.name} and email is ${anyObject.email}`);
}

// handleOject(users);

const arr = [200, 300, 400, 500, 600];

function handleArray(getArray) {
  // console.log(getArray[2]);
  return getArray[3];
}

// console.log(handleArray(arr));
handleArray(arr);
