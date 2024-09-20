
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let errorAccount = [];
  let depSum = 0;
  let withSum = 0;

  for (let i in array) {
    if (array[i].deposits && array[i].withdrawals) {
      for(let j in array[i].deposits) {
        depSum += array[i].deposits[j];
      }
      for(let k in array[i].withdrawals) {
        withSum += array[i].withdrawals[k];
      }
      if (depSum - withSum != array[i].balance) {
        errorAccount.push(array[i]);
      }
      depSum -= depSum;
      withSum -= withSum;
    }
  }

  return errorAccount;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
