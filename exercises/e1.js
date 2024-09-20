
// EXERCISE 1
// Return an array of numbers in 1..10
// getFirstTenNumbers() => [1, 2, 3, ... , 10]

export function getFirstTenNumbers() {
  // Your code goes here...
  // 1. Create an empty array.
  var firstTen = [];
  // 2. Create a for loop that iterates from 1 - 10
  for (var i = 1; i <= 10; i++) {
    // 3. Create an if the length of is less than 10
    if (firstTen.length < 10) {
      // push the iteration number into the array
      firstTen.push(i);
      // else, break;
    } else {
      break;
    }
  }
  // 4. Return the newly formed array.
  return firstTen;
}

// 5. Log the result.
console.log(getFirstTenNumbers());

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
