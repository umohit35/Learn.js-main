var c = 300; //Global scoped variable
let a = 100;

if (true) {
  let a = 10; //scoped variable
  const b = 20;
  var c = 30; //is not scope specific

  //console.log("Inner :", a);
}

// console.log("Outer :", a);
// console.log(b);
// console.log(c);

function one() {
  const username = "mohit";
  function two() {
    const website = "github";
    console.log(username);
  }
  two();
  //console.log(website);
}
//one();

if (true) {
  const username = "mohit";
  //if(){

  // }
}
