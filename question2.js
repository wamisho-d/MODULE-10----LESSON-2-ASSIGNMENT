// File: bankingSystem.js

class BankAccount {
    #balance; // Private property to store the account balance

    /**
     * Constructor to initialize the bank account with an optional initial balance.
     * @param {number} initialBalance - The starting balance of the account (default is 0).
     */
    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.#balance = initialBalance;
    }

    /**
     * Deposit money into the account.
     * @param {number} amount - The amount to deposit. Must be greater than zero.
     */
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.#balance += amount;
        console.log(`Successfully deposited $${amount}. Current balance: $${this.#balance}`);
    }

    /**
     * Withdraw money from the account.
     * @param {number} amount - The amount to withdraw. Must be greater than zero and less than or equal to the current balance.
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient funds.");
        }
        this.#balance -= amount;
        console.log(`Successfully withdrew $${amount}. Current balance: $${this.#balance}`);
    }

    /**
     * Get the current balance of the account.
     * @returns {number} The current balance.
     */
    getBalance() {
        console.log(`Current balance: $${this.#balance}`);
        return this.#balance;
    }
}

// Example usage
try {
    const myAccount = new BankAccount(100); // Initialize account with $100
    myAccount.deposit(50);                 // Deposit $50
    myAccount.withdraw(30);                // Withdraw $30
    myAccount.getBalance();                // Check balance
} catch (error) {
    console.error(error.message);          // Handle any errors
}
