const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()
    }, 5000)
})


promiseOne.then(() => {
    console.log('promise comsumed')
})

