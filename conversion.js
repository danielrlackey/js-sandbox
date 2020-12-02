// const cars = ["ford", "chevy", "honda", "toyota"];


// cars.forEach((car, index, array) => {
//     console.log((`${index} ${car}`))
//     console.log(array);
// })

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }

// cars.forEach((car) => {
//     console.log(car)
// })

// cars.map((car) => {
//     console.log(car)
// })

// const users = [
//     {id: 1, name: "john"},
//     {id: 2, name: "sarah"},
//     {id:3, name: "karen"}
// ];

// const ids = users.map((user) => {
//     return user.id;
// });

// console.log(ids);

const user = {
    firstName: "daniel",
    age: 30,
    height: 5.7
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}