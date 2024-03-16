// foEach uses the callBack function 


const coding = ["js","C++","Java","Ruby", "Python"]


const values =coding.forEach((item)=>{
    // console.log(item);
    return item;
}) //forEach function does not return any values 

//  console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum =myNum.filter( (num)=> {
//    return  num > 4
// })

const newNum = []

myNum.forEach((num)=>{
    if (num > 4) {
        newNum.push(num)
    }
})
//  console.log(newNum);


