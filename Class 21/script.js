function user(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = loginCount;
    return this;
}
let result = user('ihtasham', 3, true)
console.log(result)
