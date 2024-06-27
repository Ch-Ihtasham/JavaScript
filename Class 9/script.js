// const arr = [1, 2, 3, 4, 5]
// const arr1 = new Array(1, 2, 3, 4)
// console.log(arr)
// console.log(arr1)
// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(1)
// console.log(arr)
// arr.shift()
// console.log(arr)
// console.log(arr.includes(9))
// console.log(arr.indexOf(4))
// const newarr = arr.slice(1, 3)
// console.log(newarr)
// console.log(arr)
// const newarr2 = arr.splice(1, 3)
// console.log(newarr2)
// console.log(arr)
// const array = [
//     { name: "Ihtasham", rollno: 12 },
//     { name: "shami", rollno: 123 }
// ]
// const value = array
// array.map((item, i) => {
//     console.log(item.name);
// });
const arr = [1, 2, 3, 4, 5];
function filter() {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(filter())
