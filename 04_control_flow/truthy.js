const userEmail = "abc@123.gmail.com"
const userEmaill = ""
const userEmailll = []

if(userEmailll){
    // console.log("got user email");
}else{
    // console.log("Didn't get user email");
}

// falsy values
// false , 0, -0 , BigInt 0n, "", null, undefined, null, NaN

// truthy values
// "0", 'false', " ",[], {}, function(){}

if(userEmailll.length ===0){
    // console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    // console.log("Object is empty");
}

// Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1= undefined ?? 15
val1= null ?? 10 ?? 5


console.log(val1);

// Ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80 ") : console.log("more then 80");
