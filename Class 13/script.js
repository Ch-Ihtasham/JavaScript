const map = new Map()
map.set('name', 'ihtasham')
map.set('class', 'BsIt')
// console.log(map)
for (const [key, value] of map) {
    // console.log(key, value)
}
let array2 = [1, 2, 3, 4, 5, 6]
// array2.forEach((value, index) => {
//     if (value > 5) {
//         console.log(value)
//     }
// })
// const ans =array2.filter((value, index) => value > 5 )
// console.log(ans)
// let arr = [
//     {
//         name: 'ihtaham',
//         class: 'bsit'
//     },
//     {
//         name: 'ihtah',
//         class: 'bsit'
//     }
// ]
// arr.forEach((value)=>(
//     console.log(value.name)
// ))
let array = [1, 2, 3, 4, 5]
let ansq = array.forEach((value) => {
    let answer = (value * 2)
    return answer
})
// console.log(ansq)
let myarr = [1, 2, 3, 4, 5]
console.log(myarr.pop(myarr[0]))
// delete myarr[2];

console.log(myarr)
myarr.forEach((num)=> num)
// let ans = myarr.map((num) => num)
// console.log(ans)