var a = 1;
let b = 2;
const c = 3;

// const test = () => {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("test scope", a, b, c);
// }

// test();

if(true){
    console.log("if scope", a, b, c)
}

console.log("global scope", a, b, c);