// File: onlineShoppingSimulation.js

// Simulated login status
let loggedIn = true;

// Cart containing items
let cart = [
    'Shirts',
    'Shoes',
    'Bread',
    'Cell Phone',
    'Candy Corn',
    'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)',
    'Tomato'
];

// Prices for each item (mapped to cart items by index)
let prices = [25, 50, 2.5, 800, 3, 45, 1.2];

// Utility functions
function displayCart() {
    console.log("Your cart contains the following items:");
    cart.forEach((item, index) => {
        console.log(`- ${item}: $${prices[index].toFixed(2)}`);
    });
}

function calculateTotal() {
    return prices.reduce((total, price) => total + price, 0).toFixed(2);
}

function addItem(item, price) {
    cart.push(item);
    prices.push(price);
    console.log(`${item} has been added to your cart at $${price.toFixed(2)}.`);
}

function removeItem(item) {
    const index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
        prices.splice(index, 1);
        console.log(`${item} has been removed from your cart.`);
    } else {
        console.log(`${item} is not in your cart.`);
    }
}

// Main logic
if (loggedIn) {
    displayCart();
    console.log(`Total: $${calculateTotal()}`);
    console.log("\n--- Actions ---");
    console.log("1. Adding an item to the cart.");
    addItem('Laptop', 1200);
    console.log("2. Removing an item from the cart.");
    removeItem('Bread');
    console.log("\nUpdated Cart:");
    displayCart();
    console.log(`Total: $${calculateTotal()}`);
} else {
    console.log("Please log in to view your cart.");
}
