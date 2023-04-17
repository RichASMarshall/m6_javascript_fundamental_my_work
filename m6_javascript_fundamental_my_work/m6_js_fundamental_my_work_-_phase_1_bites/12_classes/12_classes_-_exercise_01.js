// // Exercise

// // We would like to implement a class to represent a user account.
// // Here is how we should be able to use this class:


// const user = new User('Uma');

// user.getName(); 
// 'Uma'

// > user.getIntroduction();
// 'Hi, my name is Uma'


// // To complete this exercise, you will have to:

// // Learn how to declare a class and its methods. Having a look at the Classes 
// // MDN documentation is a good start.
// // Initialise an attribute within the constructor special method
// // Implement the User class in a file user.js so it behaves exactly like in the 
// // example code above.

// // Require the file into the node REPL to verify the class is working.

// // Reveal suggested solution


// // file: user.js

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }

//   getIntroduction() {
//     return `Hi, my name is ${this.name}`;
//   }
// }

// The solution in Node REPL:
const User = require('./user');
//output
undefined

const user = new User('Uma');
//output
undefined

user.getName();
//output
'Uma'

user.getIntroduction();
//output
'Hi, my name is Uma'
