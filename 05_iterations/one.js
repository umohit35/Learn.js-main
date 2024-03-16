// for

const array = [2,5,8,9,4,3,7];

for (let i= 0; i < array.length; i++) {
    const element = array[i];
    if (element == 9) {
        console.log(i);
    }
    // console.log(element);
}
for (let i = 0; i <= 3; i++) {
    // console.log(`outer loop: ${i}`);
   for (let j = 0; j <= 3; j++) {
    // console.log(`inner loop: ${j} and inner loop: ${i}`)
    // console.log(`${i} * ${j} =${i*j}`);
   }
    
}

// break and continue

// for (let index = 1; index <=20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
    
}