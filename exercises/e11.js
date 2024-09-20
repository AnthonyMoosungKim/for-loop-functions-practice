// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...

  // 1. Create an empty array to hold all withdrawal numbers.
  let bankAccountWithdrawals = [];
  // 2. Create a zero variable to hold the sum.
  let sum = 0;
  // 3. Create a for loop inside bankAccount's array.
  for (let i in array) {
    //4. If withdrawals exist, 
    if (array[i].withdrawals) {
      // enter in the array with a for loop.
      for (let j in array[i].withdrawals) {
        // 5. Add all the numbers of withdrawals together.
        sum += array[i].withdrawals[j];
      }
      // 6. Push the sum into the empty array.
      bankAccountWithdrawals.push(sum);
      // 7. Reset the sum by subtracting it with itself for the next person.
      sum -= sum;
      // 7. Else, push/input in a 0.
    } else {
      bankAccountWithdrawals.push(0);
    }
  }
  return bankAccountWithdrawals;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
