// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...

  // 1. Create an array for the results.
  let bankAccountNames = [];
  
  // 2. Create an iteration for the given array.
  for (let x in array) {
    //3. Create an iteration for all given array.name
    for (let y in array[x].name) {
      if (letter.toLowerCase() == array[x].name[y].toLowerCase()) {
        bankAccountNames.push(array[x].name);
      }
    }
  }

  return bankAccountNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
