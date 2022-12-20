class User {
   constructor(name, email, login , logout){
    this.email = email 
    this.name = name

   } 
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.table(userOne)
console.table(userTwo);

//the 'new' keyword
// creates a new empty object {}
// sets the value of 'this' to be the new empty object
// calls the constructor method
