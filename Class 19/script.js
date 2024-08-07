const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()
    }, 1000)
})


promiseOne.then(() => {
    console.log('promise comsumed')
})
console.log('hello world')

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('prmoise two')
        resolve()
    }, 2000);
}).then(() => {
    console.log("promise two consumed")
})

