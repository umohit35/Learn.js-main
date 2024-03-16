const user ={
    username : "mohit",
    price: 2000,

    messages: function(){
        console.log(`${this.username},welcome to the website`);
        // console.log(this);
    }
}

// user.messages();
// user.username = "ravi";
// user.messages()

// console.log(this);

function one(){
    let username ="mohit";
    // console.log(this.username)// undefined cannot be accessed inside a function
}
// one();


// const two = function(){
//     let username ="mohit";
//     console.log(this.username) // undefined cannot be accessed using object 
// }

const two = ()=>{
    let username ="mohit";
    console.log(this.username)
}

// two();

// const addtwo= (num1, num2) => {
//     return num1 + num2;
// } //syntax of arrow function

// const addtwo= (num1, num2) => num1 + num2; //implicit return ,we don't need the scope and return statement to print in implicit return statement

// const addtwo= (num1, num2) => (num1 + num2)  //implicit return

const addtwo= (num1, num2) => ({username:"mohit"}) // way to return an object using arrow function

console.log(addtwo(3,5))

