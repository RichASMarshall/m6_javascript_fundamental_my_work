class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
  }
}

module.exports = ShoppingBasket;


// In the above code, the ShoppingBasket class has the same constructor 
// that initializes an empty array items to store the candies added to 
// the basket. It has the addItem(item) method that takes in an object 
// with a getPrice() method as an argument and adds it to the items array.
// The getTotalPrice() method calculates the total price of all the 
// items in the basket by using reduce() to sum up the prices of all the 
// items in the items array, same as before.

// At the end of the code, we use module.exports to export the ShoppingBasket 
// class, so that it can be required into a Node.js REPL or other modules 
// using the require() function. For example, in a Node.js REPL, you can 
// do the following:


// // Node REPL input and correct output:
// const ShoppingBasket = require('./ShoppingBasket');
// //output
// // undefined

// const Candy = require('./Candy');
// //output
// // undefined

// const candy = new Candy('Mars', 4.99);
// //output
// // undefined

// candy.getName();
// //output
// // 'Mars'

// candy.getPrice();
// //output
// // 4.99

// const basket = new ShoppingBasket();
// //output
// // undefined

// basket.getTotalPrice();
// //output
// // 0

// basket.addItem(candy);
// //output
// // undefined

// basket.getTotalPrice();
// //output
// // 4.99

// basket.addItem(new Candy('Skittle', 3.99));
// //output
// // undefined

// basket.addItem(new Candy('Skittle', 3.99));
// //output
// // undefined

// basket.getTotalPrice();
// //output
// // 12.97
// // My Node end.

// Note: The path './ShoppingBasket' assumes that the 
// ShoppingBasket.js file is in the same directory as 
// the file from which you are requiring it. You may 
// need to adjust the path accordingly based on your 
// project's file structure.