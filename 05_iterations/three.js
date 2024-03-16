// for of loop

const arr =[1,2,3,4,5,6]
for (const val of arr) {
    // console.log(val);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`Each char in ${greet}`);
}

// Maps

const map = new Map() // Map holds key value pair and remember the original insertion order of the keys.
map.set('IN',"India") 
map.set('USA',"United States of America") 
map.set('FR',"France") 

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1 :'GTA',
    game2: 'spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
}