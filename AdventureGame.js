/* 
 * Adventure Game
 * 
 * This is a simple text-based adventure game written in JavaScript.
 * The player can move between rooms, pick up items, and interact with objects.
 * 
 * Author: Mani
 */
console.log("Welcome to the Adventure Game!");
// Creating basic profile information
let userName = "Alex";
let userAge = 25;
let isStudent = true;
// Display the profile information
console.log("User Profile:");
console.log("Name: " + userName);
console.log("Age: " + userAge);
console.log("Student: " + isStudent);
// Creating product information
let productName = "Coffee Mug";
let productPrice = 12.99;
let inStock = true;
let productDescription = "A large ceramic mug for hot beverages";
// Display product details
console.log("Product Details:");
console.log("Name: " + productName);
console.log("Price: $" + productPrice);
console.log("Description: " + productDescription);
console.log("Available: " + inStock);
// Working with different numbers
let wholeNumber = 42;
let decimalNumber = 3.14;
let negativeNumber = -10;
// Basic math operations
let sum = wholeNumber + decimalNumber;
let difference = wholeNumber - negativeNumber;
// Display results
console.log("Number Examples:");
console.log("Whole number: " + wholeNumber);
console.log("Decimal number: " + decimalNumber);
console.log("Negative number: " + negativeNumber);
console.log("Sum: " + sum);
console.log("Difference: " + difference);
// Create a shopping cart item
let itemName = "Laptop";
let itemPrice = 999.99;
let itemQuantity = 1;
let isAvailable = true;
let itemDescription = "15-inch silver laptop with 8GB RAM";
// Calculate total cost
let totalCost = itemPrice * itemQuantity;
// Create a complete summary
console.log("Shopping Cart Summary:");
console.log("-------------------");
console.log("Item: " + itemName);
console.log("Description: " + itemDescription);
console.log("Price: $" + itemPrice);
console.log("Quantity: " + itemQuantity);
console.log("Available: " + isAvailable);
console.log("-------------------");
console.log("Total Cost: $" + totalCost);

const readline = require("readline-sync");
let playerName = readline.question();
console.log("Welcome: " + playerName);
// Get player name using readline-sync
let inventory = [];