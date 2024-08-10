function getData(dataId, callback) {
    setTimeout(() => {
        console.log('data is ', dataId)
        if (callback) {
            callback()
        }
    }, 2000);
}
getData(1, () => {
    getData(2, () => {
        getData(3)
    })
})
