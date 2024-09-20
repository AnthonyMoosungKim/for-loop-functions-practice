// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  
  let zeroToTwoThousand = [];
  let sum = 0;

  for (let i in array) {
    if (array[i].deposits) {
      for(let j in array[i].deposits) {
        sum += array[i].deposits[j];
      }
      if (sum >= 0 && sum < 2000) {
        zeroToTwoThousand.push(array[i]);
      }
      sum -= sum;
    } else {
      zeroToTwoThousand.push(array[i]);
    }
  }

  return zeroToTwoThousand;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
