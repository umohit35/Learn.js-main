//*****************************Array*****************************************//

const myArr = [0, 1, 2, 3, 4]; //declarations of arrays
const myFriends = ["Naman", "ravi", "rachit"]; //declarations of arrays

const myArr2 = new Array(1, 2, 3, 4); //declarations of arrays
console.log(myArr[1]); //print the array
console.log(myFriends[1]);
console.log(myArr2[2]);

console.log(myArr.length); //print the length of array
console.log(myFriends.length);
console.log(myArr2.length);

//*****************************Methods*****************************************//

myArr.push(6); //adding values to the existing array
myArr.push(7);
myArr.pop(); // removes the last inserted value from the array

const newArr = myArr.join(); //binds the array and converts it to a string

console.log(myArr); //print the array
console.log(newArr);
console.log(typeof newArr);

//*****************************slice, splice*****************************************//

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); //prints the shallow copy of the array
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3); //removes the splice array from the original array and prints the remaining array
console.log("C", myArr);
console.log(myn2);
