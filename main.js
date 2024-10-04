// Single Line Comment
/*
    Multi Line Comment
    = sign is known as the assignment operator
*/

// Primitive Data Types
// 1. String
var name = "Sharegh";
console.log(name);
// 2. Number
var age;
console.log(age); // undefined
age = 28; // integer
console.log(age);
console.log("28"); // string
// 28 and "28" are different data types

// 3. Boolean
var isProgrammer = true; // true or false

// Empty Data Types
// 1. Null - assigned Empty value of null
var nullVaraiable = null;
// 2. undefined - delcared but not assigned a value
var undefinedVariable = undefined;

// Object Data Type
// 1. Array - zero indexed list of values
var languages = ["Javascript", "Python", "Java", "C++"];
//index is    [0           , 1       , 2     ,     3]
console.log(languages);

// 2. Function
var date = Date(); // returns the current date and time
console.log(date);

// Arithmetic Operators - +, -, *, /, %, ++, --
var x = 10;
var y = 15;

console.log("Addition: ", x + y); // 25
console.log("Subtraction", x - y); // -5
console.log("Multiplcation", x * y); // 150
console.log("Division", x / y); // 0.6666666666666666
// Modulus - returns the remainder
console.log("Modulus", y % x); // 5

// Increment and Decrement
console.log("Increment", x++); // 10
console.log("Increment", x); // 11
console.log("Increment", ++y); // 16
// decrement operator works the same way but decreases the value
