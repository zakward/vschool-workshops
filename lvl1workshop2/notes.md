# Workshop Notes - Beginner Level Development

## Introduction to Loops and Conditionals

- **Loops Overview**
  - Loops are used to repeat a block of code multiple times, allowing for efficient handling of repetitive tasks.
  - Two primary types of loops in JavaScript: `while` loop and `for` loop.



- **While Loop**
  - Syntax:
    ```javascript


    while (condition) {
      // Code block to be executed while the condition is true
    }

    ```
  - Example:
    ```javascript

    let count = 1;

    while (count <= 5) {
      console.log("Current count:", count);
      count++;
    }
    ```

- **For Loop**
  - Syntax:
    ```javascript


    for (initialization; condition; iteration) {
      // Code block to be executed while the condition is true
    }
    ```
  - Example:
    ```javascript


    for (let i = 1; i <= 5; i++) {
      console.log("Current index:", i);
    }
    ```

## Using Loops for Data Processing

- **Iterating through Arrays**
  - Loops are commonly used to iterate through arrays and perform operations on each element.
  - Example: Calculating the sum of all numbers in an array.


    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    console.log("Sum of numbers:", sum);
    ```

- **Searching and Filtering**
  - Loops can be used to search for specific elements in an array or filter elements based on certain conditions.

  - Example: Finding the first even number in an array.


    ```javascript
    const numbers = [1, 3, 5, 6, 8, 9];
    let foundEvenNumber = false;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        console.log("First even number found:", numbers[i]);
        foundEvenNumber = true;
        break; // Exit the loop once the first even number is found
      }
    }

    if (!foundEvenNumber) {
      console.log("No even numbers found.");
    }
    ```

## Conditional Statements with Loops

- **Nested Loops and Conditionals**
  - Combining loops with conditional statements allows for more complex operations.
  - Example: Printing a pattern with nested loops.
    ```javascript

    const size = 5;
    let pattern = "";

    for (let row = 1; row <= size; row++) {
      for (let col = 1; col <= row; col++) {
        pattern += "* ";
      }
      pattern += "\n";
    }

    console.log(pattern);
    ```

- **Loop Control Statements**

  - Loop control statements like `break` and `continue` can be used to control the flow within loops.

  - Example: Skipping even numbers in a loop.
    ```javascript


    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        continue; // Skip even numbers
      }
      console.log("Current number:", i);
    }
    ```

## Conclusion

- **Summary**
  - Loops and conditionals are fundamental concepts in programming, allowing developers to handle repetitive tasks efficiently and make decisions based on conditions.
  - Understanding how to use while loops and for loops, along with basic conditionals, is essential for building more complex and interactive applications.

- **Practice and Exploration**
 practice and experiment with loops and conditionals in various scenarios to strengthen your coding skills.
  -exploring additional loop control statements and more complex loop patterns to further enhance yourunderstanding.
