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
// obj.name = "muhammad Ihtasham"
// obj.greating = function me () {
//     console.log(`hello user ${this.name}`)
// }
// console.log(obj.greating())
// console.log(obj)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = Object.assign({},obj1 ,obj2)
console.log(obj3)
// const obj4 = new Object() create object through constructor
// const obj4 ={
//     id:123,
//     name:"Zeeshan",
//     email:"zeeshan@gmail.com"
// }
// console.log(Object.keys(obj4))
// console.log(Object.values(obj4))
// console.log(Object.entries(obj4))
// Object.freeze(obj4)
// Object.seal(obj4)
// delete obj4.email
// obj4.email="ihtasham"
// console.log(obj4)
// const {name} = obj4;
// console.log(name)
// const {name : myname} = obj4;
// console.log(myname)


