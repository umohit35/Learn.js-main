// ` ` = string interpolation
//  this. is used when we want to refer to the same object

//*****************************Object*****************************************//

const newUser = new Object();
//const newUser={};
(newUser.id = "123abc"),
  (newUser.name = "sam"),
  (newUser.email = "abc@gmail.com"),
  (newUser.isLoggedIn = true);

// console.log(newUser);
const obj = {
  email: "newUser.email.com",
  fullName: {
    userfullname: {
      firstName: "Sam",
      lastName: "Kumar",
    },
  },
};

// console.log(obj.fullName.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = Object.assign({}, obj1, obj2); //combines two objects together
const obj4 = { ...obj1, ...obj2 }; //spread operator is used
// console.log(obj3);
// console.log(obj4);

const users = [
  {
    id: 1,
    name: "Mohit",
    email: "pqr@gmail.com",
  },
  {
    id: 2,
    name: "sam",
    email: "abc@gmail.com",
  },
  {
    id: 3,
    name: "raj",
    email: "oma@gmail.com",
  },
];

users[1].email;
//console.log(newUser);

// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(newUser.hasOwnProperty("isLoggedIn"));

//*****************************destructuring Object*****************************************//

const courses = {
  cname: "learn LS",
  price: "999",
  cleaner: "Mohit",
};
// course.course-names

const { cname } = courses;

//console.log(cname);

//*****************************APIS*****************************************//

// {
//     name: "Course",
//     course-names: "scripting",
//     price: "999",
//     course-learner: "Mohit",

// [
//     {},
//     {},
//     {}
// ]

// }
