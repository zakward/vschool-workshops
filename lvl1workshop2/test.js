// // --- Introduction to Loops and Conditionals ---
// console.log("---- Introduction to Loops and Conditionals ----");


// // While Loop Example
// let count = 1;   // accumulator
// while (count <= 5) {
//   console.log("Current count:", count);
//   count++;
// }

// // For Loop Example
// for (let i = 1; i <= 5; i++) {
//   console.log("Current index:", i);
// }

//NOTE:  first example updates a count and the second is updating an index


// // --- Using Loops for Data Processing ---
console.log("\n---- Using Loops for Data Processing ----");

// Iterating through Arrays - Sum of Numbers
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log("Sum of numbers:", sum);


// Searching and Filtering - Finding the First Even Number
// const numbers2 = [1, 3, 5, 7, 8,10];
// let foundEvenNumber = false;

// for (let i = 0; i < numbers2.length; i++) {
//   if (numbers2[i] % 2 === 0) {
//     console.log("First even number found:", numbers2[i]);
//     foundEvenNumber = true;
//     break;
//   }
// }

// if (!foundEvenNumber) {
//   console.log("No even numbers found.");
// }


// same problem as above but as a while loop
const numbers2 = [1, 3, 5, 7, 8, 10];
let foundEvenNumber = false;
let i = 0;

while (i < numbers2.length) {
  if (numbers2[i] % 2 === 0) {
    console.log("First even number found:", numbers2[i]);
    foundEvenNumber = true;
    break;
  }
  i++;
}

if (!foundEvenNumber) {
  console.log("No even numbers found.");
}


