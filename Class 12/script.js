function sum(a, b, c) {
    return a + b + c;
}
let number = [1, 2, 3]
console.log(sum(...number))
function cal(...num) {
    return num
}
console.log(cal(1, 2))
let sum1 = 0;
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(JSON.stringify(person))

const obj4 ={
    id:123,
    name:"Zeeshan",
    email:"zeeshan@gmail.com"
}
Object.freeze(obj4)
obj4.email="hel";
console.log(obj4)