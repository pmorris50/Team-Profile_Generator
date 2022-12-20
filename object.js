class User {
   constructor(name, email, login , logout){
    this.email = email 
    this.name = name
    this.score = 0;
   }
   login(){
    console.log(this.email, 'just logged in')
    return this;
   } 
   logout(){
    console.log(this.email, 'just logged out')
    return this;
   }
   updateScore(){
    this.score ++;
    console.log(this.email, 'score is now', this.score)
    return this;
   }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

// console.table(userOne)
// console.table(userTwo);
// userOne.login()

userOne.login().updateScore().updateScore().logout();

//the 'new' keyword
// creates a new empty object {}
// sets the value of 'this' to be the new empty object
// calls the constructor method
