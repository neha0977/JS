// Truthy Values
// Any value that is not falsy is considered truthy and will evaluate to true in a Boolean context. In JavaScript, this includes most values.
// Here are a few common truthy values:
// true – The boolean value true.
// Non-zero numbers – Any number except 0 (e.g., 1, -1, 3.14).
// Non-empty strings – Any string that has at least one character ("hello", " ").
// Objects – Any object, including arrays ([]), functions, and even {} (empty object) are truthy.
// Arrays – Even an empty array ([]) is truthy.
// Functions – Any function definition is truthy.

// Falsy Values
// Falsy values are values that evaluate to false when used in a Boolean context (e.g., in an if statement).
// There are only six falsy values in JavaScript:
// false – The boolean value false.
// 0 – The number zero.
// "" (empty string) – A string with no characters.
// null – Represents the absence of any object value.
// undefined – A variable that has been declared but not assigned a value.
// NaN – Not a Number, used to represent invalid numerical operations.



if (false) {
    console.log("This will not run");
  }
  
  if (0) {
    console.log("This will not run");
  }
  
  if ("") {
    console.log("This will not run");
  }
  
  if (null) {
    console.log("This will not run");
  }
  
  if (undefined) {
    console.log("This will not run");
  }
  
  if (NaN) {
    console.log("This will not run");
  }
  if (true) {
    console.log("This will run");
  }
  
  if (1) {
    console.log("This will run");
  }
  
  if ("hello") {
    console.log("This will run");
  }
  
  if ({}) {
    console.log("This will run");
  }
  
  if ([]) {
    console.log("This will run");
  }
  
  if (function() {}) {
    console.log("This will run");
  }

  let value = 0;  // falsy value
if (value) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");  // This will be printed
}

value = "Hello";  // truthy value
if (value) {
  console.log("This is truthy");  // This will be printed
} else {
  console.log("This is falsy");
}

    

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")