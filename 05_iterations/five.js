const coding = ["js","C++","Java","Ruby", "Python"]

coding.forEach( function (item){
    // console.log(item);
}) //normal callback function

coding.forEach( (items)=>{
    // console.log(items);
}) //callback function using arrow function

function printMe(item){
    // console.log(item);
}
coding.forEach( printMe );


coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
} );


const myCode =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCode.forEach( (item)=>{
    console.log(item.languageFileName);
    console.log(item.languageName);
} );