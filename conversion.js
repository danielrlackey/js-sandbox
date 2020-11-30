const id = 100

// if(id >= 100) {
//     console.log("correct")
// } else{
//     console.log("wrong!")
// }

// const color = "yellow";

// if( color === "red") {
//     console.log("color is red")
// } else if(color === "blue"){
//     console.log("color is blue")
// } else {
//     console.log("color is not red or blue")
// }

const name = "steve";
const age = 20;

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`)
}

if(age > 65 || age < 13){
    console.log(`${name} connot run in the race`)
}else{
    console.log(`${name} can run in the race!`)
}

console.log(id === 100 ? "correct" : "incorrect");