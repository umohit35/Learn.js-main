const myObject= {
    js: 'javascript',
    cpp: 'C++',
    java: 'Java',
    rb: 'Ruby',
    swift: 'Swift by Apple'    
}

for (const key in myObject) {
    // console.log(myObject[key]); // or
    // console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const prog = ["js", "rb","py","css","java"]

for (const key in prog) {
//    console.log(key);
//    console.log(prog[key]);
 }

 const map = new Map() //map is not iterable
map.set('IN',"India") 
map.set('USA',"United States of America") 
map.set('FR',"France")

for (const key in map) {
    console.log(map(key));
}

