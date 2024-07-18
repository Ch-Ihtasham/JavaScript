function sum(a, b, c) {
    return a + b + c;
}
let number=[1,2,3]
console.log(sum(...number))
function cal(...num){
    return num
}
console.log(cal(1,2))