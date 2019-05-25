console.log(
  "%cFUNCTIONS.JS",
  "color: magenta; font-weight: bold; font-size: 3rem; text-shadow: 2px 2px 4px rgba(204,204,204, 0.6);"
);
// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */
function consume(arg1, arg2, cb) {
  return cb(arg1, arg2);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
function add(arg1, arg2) {
  return arg1 + arg2;
}

function multiply(arg1, arg2) {
  return arg1 * arg2;
}

function greeting(arg1, arg2) {
  return `Hello ${arg1} ${arg2}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: The reason nestedfunction() can acess the variable `internal` is because of the concept of closure. If a function can't find a variable inside itself, it can search outside itself for variables, but it can't look inside its inner functions for variables, kind of like a one-way gate. This is the same reason myFunction() can access the variable 'external'. If we create a variable called 'nested' and store it inside of nestedFunction(), we won't be able to access it from myFunction() or from the global scope.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  // console.log(nested);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
    // const nested = "I'm in the nested function";
  }
  nestedFunction();
}
myFunction();
