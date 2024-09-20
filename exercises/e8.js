
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let highestAccount = []
  let highest = -Infinity
  
  for (let i in array) {
    // If the balance is higher than the current highest; RUN
    if (array[i].balance > highest) {
      // Replaces negative infinity each loop with current highest balance.
      highest = array[i].balance;
      // Places current Array object in the placeholder for highest account.
      highestAccount = [array[i]];
    }
  }
  // After the for loop is finished, return the current highestAccount.
  return highestAccount;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
