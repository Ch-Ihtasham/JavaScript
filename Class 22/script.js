function multiply(num) {
    return num * 5
}
multiply.power = 4
console.log(multiply(5))
console.log(multiply.power)
console.log(multiply.prototype)

function createuser(name, score) {
    this.name = name
    this.score = score

}
createuser.prototype.increment = function () {
    this.score++
}
createuser.prototype.printMe = function () {
    console.log(`score is ${this.score}`)
}
createuser('ihtasham', 10)

const u1 = new createuser('ihtasham', 25)
const u2 = new createuser('shami', 300)
u1.printMe()


// heello
















// console.log(createuser.prototype)
