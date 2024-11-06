

// 2. What are the main data types in JavaScript?
// Explanation: JavaScript has several primitive data types:
// String: Represents text, e.g., "Hello".
// Number: Represents both integer and floating-point numbers, e.g., 42 or 3.14.
// Boolean: Represents logical values true or false.
// Undefined: Indicates a variable declared but not yet assigned a value.
// Null: Represents an intentional absence of any value.
// Symbol: Represents unique identifiers (introduced in ES6).
// BigInt: Represents numbers beyond the safe integer limit for precise calculations.
// JavaScript also has Object types (like arrays, functions, dates) which are non-primitive types.

// 3. Explain the difference between == and ===.
// Explanation: == is the equality operator, which compares values for equality but performs type conversion if necessary. 
// For instance, 5 == "5" returns true because "5" is converted to a number before comparison. === is the strict equality operator, 
// which checks both the value and the type without converting. Thus, 5 === "5" returns false because the types (number and string) differ.

// 4. What is hoisting in JavaScript?
// Explanation: Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their containing scope during the compilation phase.
//  Only declarations are hoisted, not initializations. For example:
// console.log(x); // undefined, due to hoisting
// var x = 5;
// In this example, the declaration var x is hoisted to the top, but the assignment (x = 5) remains in place, so x is undefined when console.log is called.

// 5. Explain let, var, and const keywords.
// Explanation:
// var: Function-scoped and hoisted. Variables declared with var can be redeclared and updated.
// let: Block-scoped and not hoisted in the same way as var, preventing access before declaration (temporal dead zone). let variables can be updated but not redeclared within the same scope.
// const: Block-scoped like let but immutable. const variables must be assigned a value at the time of declaration and cannot be reassigned, although object properties inside a const object can be modified.


// 6. What is a closure, and how is it useful?
// Explanation: A closure is a feature where an inner function has access to the outer (enclosing) function’s 
// variables even after the outer function has finished executing. Closures are created whenever a function is created within another function. 
// This is helpful for creating private variables or persistent state:
// function counter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// const increment = counter();
// console.log(increment()); // 1
// console.log(increment()); // 2
// Each call to increment accesses the count variable in counter, maintaining its state between calls.

// 7. What are arrow functions, and how do they differ from regular functions?
// Explanation: Arrow functions are a concise syntax for writing functions in ES6. They differ in a few key ways:
// Syntax: Shorter, with => notation.
// No this binding: Arrow functions do not have their own this context, instead inheriting this from the surrounding lexical scope. They are useful for callback functions where you don’t want to lose the context of this.
// No arguments object: Arrow functions don’t have access to arguments.
// Example:
// const add = (a, b) => a + b;

// 8. What is the difference between call, apply, and bind?
// Explanation: These are methods for explicitly setting the this context of a function.
// call: Invokes the function immediately with a specified this value and individual arguments.
// function greet() { console.log(this.name); }
// greet.call({ name: "Alice" }); // Alice
// apply: Similar to call, but arguments are passed as an array.
// greet.apply({ name: "Bob" }); // Bob
// bind: Returns a new function with this bound to a specified value, which can be invoked later.
// const greetBob = greet.bind({ name: "Bob" });
// greetBob(); // Bob


// 9. What are Promises, and why are they used?
// Explanation: Promises represent the eventual completion (or failure) of an asynchronous operation. They allow handling of asynchronous code in a more readable way than callbacks by chaining .then() and .catch() handlers.
// A promise can be in one of three states:
// Pending: Initial state, neither resolved nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
// Example:
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done!"), 1000);
// });
// promise.then(result => console.log(result)); // "Done!" after 1 second

// 10. Explain async and await.
// Explanation: async functions are functions that return a Promise. The await keyword can be used within async functions to wait for a Promise to resolve before proceeding to the next line of code, making asynchronous code look synchronous.
// Example:
// async function fetchData() {
//   let response = await fetch("https://api.example.com/data");
//   let data = await response.json();
//   console.log(data);
// }

// 11. What is the event loop?
// Explanation: The event loop is a mechanism in JavaScript that handles asynchronous callbacks. JavaScript is single-threaded, meaning it can only do one thing at a time. The event loop allows it to perform non-blocking operations by offloading tasks like network requests to the browser’s APIs. When these tasks are done, their callbacks are added to the task queue. The event loop checks this queue and pushes tasks back onto the call stack when the stack is empty, allowing JavaScript to handle async operations smoothly.
// 12. What are modules in JavaScript?
// Explanation: Modules are JavaScript files that export specific variables, functions, or objects to be reused in other files. ES6 introduced module syntax with export and import keywords, helping to organize code better and avoid naming conflicts.
// Example:
// // math.js
// export const add = (a, b) => a + b;

// // main.js
// import { add } from './math';
// console.log(add(2, 3)); // 5


// Purpose of async vs. await
// async: Declares an asynchronous function that returns a Promise. If a function is marked as async, it automatically wraps the return value in a Promise, even if it doesn’t explicitly return a Promise.
// await: Pauses execution within an async function until the Promise is resolved or rejected. It allows you to "await" the resolution of a Promise before moving to the next line of code.
// Example:
// async function fetchData() {
//   // Returns a Promise
//   return "data";
// }

// async function getData() {
//   const data = await fetchData(); // Pauses here until `fetchData` resolves
//   console.log(data); // "data"
// }
// Execution Behavior
// async functions can run asynchronously and don’t block the main thread, allowing other code to run while waiting for operations inside the function to complete.
// await pauses only within the async function where it’s called, making that part of the code appear synchronous but without blocking the event loop. Other operations outside the async function continue running.

// async is used to define a function as asynchronous.
// await is used only within async functions, making them wait for asynchronous code to complete.