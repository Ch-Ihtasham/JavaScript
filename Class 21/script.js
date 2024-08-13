function user(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = loginCount;
    // return this; this work with new keyword and retur the require data
}
let result = new user('ihtasham', 3, true)
let result2 = new user('ihtasham talat', 6, false)
console.log(result)
// new keyword is called constructor function it gives a new copy of a function and new instance every time
// a constructor function is used to create and initialize objects.
// When you use a constructor function with the new keyword, it creates a new object, known as an instance of that constructor.
// An instance is an object created using a constructor function, and it contains the properties and methods defined in that constructor. 