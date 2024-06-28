const sym = Symbol("key1")
const obj = {
    name: "ihtasham",
    rollno: 12,
    email: "mihtahsam@gamil.com",
    // sym:"my symbol" 
    [sym]: "my symbol",
    fun: function () {
        console.log("hello world")
    }

}
// console.log(obj.email)
// console.log(obj["email"])
// console.log(obj.sym)
// console.log(obj[sym])
obj.email = "chihtasham@gamil.com"
// Object.freeze(obj)
obj.name = "muhammad Ihtasham"
obj.greating = function me () {
    console.log(`hello user ${this.name}`)
}
console.log(obj.greating())
console.log(obj)



