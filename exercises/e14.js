
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let errorAccount = [];
  

  for (let user of array) {
    let depSum = 0;
    let withSum = 0;
    if (user.deposits && user.withdrawals) {
      for(let depAmount of user.deposits) {
        depSum += depAmount;
      }
      for(let withAmount of user.withdrawals) {
        withSum += withAmount;
      }
      if (depSum - withSum != user.balance) {
        errorAccount.push(user);
      }
    }
  }

  return errorAccount;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
