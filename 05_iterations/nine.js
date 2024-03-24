const nums = [1, 2, 3];

const n = nums.reduce(function (acc, currval) {
  // console.log(`acc:${acc} and currval:${currval}`);
  return acc + currval;
}, 0);

// console.log(n);

// .........................using arrow function...............................

const num = [4, 5, 6];

const nm = num.reduce((acc, currval) => {
  // console.log(`acc:${acc} and currval:${currval}`);
  return acc + currval;
}, 0);

// console.log(nm);

const shoppingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "jy course", price: 999 },
  { itemName: "mobile dev course", price: 5999 },
  { itemName: "data science course", price: 12999 },
];

const total = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(`Total is : ${total}`);

ref;
