const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22,45,33,76,54)
const fruit = ["apple", "banna", "orange", "pear"];
const mixed = [22, "hello", true, undefined, null, {a:1, b:1}, new Date()];

let val;

val = Array.isArray(numbers);
val = numbers[3];
val = numbers[0];
val = numbers.push(44)
val = numbers.indexOf(36);
val = numbers.unshift(120);
val = numbers.pop();
numbers.shift();
val = numbers.splice(1,1);
numbers.reverse();

val = numbers.concat(numbers2);
val = fruit.sort();
val = numbers.sort();

val = numbers.sort((x,y) => {return x - y});

const under50 = (num) => {
    return num < 20;
};
val = numbers.find(under50);

console.log(numbers);
console.log(val);