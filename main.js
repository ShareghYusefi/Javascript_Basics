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

// Compound Assignment Operators - +=, -=, *=, /=, %=
console.log("+=", (x += 7)); // x = x + 7
console.log("-=", (y -= 5)); // y = y - 5
console.log("*=", (x *= 2)); // x = x * 2
console.log("/=", (y /= 3)); // y = y / 3
console.log("%=", (x %= 3)); // x = x % 3

// Comparison Operators - ==, ===, !=, !==, >, <, >=, <=
var a = 10;
var b = 20;

// == - checks if the values are equal
// === - checks if the values and data types are equal
console.log("Equal to: ", a == b); // false
console.log("Equal to 10: ", a == 10); // true
// data types are different for below comparison
console.log("Equal to '10': ", a === "10"); // false

// ! is the negation operator - flips the value
console.log("negaation of true: ", !true); // false
console.log("a != b: ", a != b); // true
// a is not equal to b and the data types are different
console.log("a !== b: ", a !== b); // true

// >, <, >=, <=
console.log("Greater than: ", a > b); // false
console.log("Less than: ", a < b); // true
console.log("Greater than or equal to: ", a >= b); // false
console.log("Less than or equal to: ", a <= b); // true

// Logical Operators - AND (&&), OR (||), NOT (!)
var c = 30;

// AND - returns true if both conditions are true
console.log("AND: ", a < b && b < c); // true
console.log("AND: ", a > b && b < c); // false

// OR - returns true if one of the conditions is true
console.log("OR: ", a < b || b < c); // true
console.log("OR: ", a > b || b < c); // true
// In OR operator if first condition is true, it does not check the second condition

// NOT - flips the value
console.log("!: ", !(c == 30)); // false

// String Manipulation
var firstname = "Sharegh";
var lastname = "Yusefi";

// string concatenation - combining two strings
var fullname = firstname + " " + lastname;
console.log("Fullname: ", fullname);
// using concat method
var fullName2 = firstname.concat(" ", lastname);
console.log("Fullname2: ", fullName2);
// using template literals
var fullName3 = `${firstname} ${lastname}`;
console.log("Fullname3: ", fullName3);

// String Methods
// 1. length - returns the length of the string
console.log("Length: ", firstname.length);
// 2. toUpperCase - converts the string to uppercase
console.log("Uppercase: ", firstname.toUpperCase());
// 3. toLowerCase - converts the string to lowercase

// Strings are zero indexed like arrays
// 4. indexOf - returns the index of the first occurence of the character
console.log("Lowercase: ", firstname.indexOf("a"));

// Creating Arrays
var cars = ["BMW", "Audi", "Mercedes"];
console.log("Cars: ", cars);

var fruit = new Array("Apple", "Banana", "Mango");
console.log("Fruit: ", fruit);

// Arrays are zero indexed
// Accessing elements in an array using index of value
console.log("First Car: ", cars[0]);

// Assigning a new value to an element in an array
cars[0] = "Toyota";
console.log("Assigned First Car: ", cars[0]);

// Adding a new element to the end of the array
cars.push("Honda");
console.log("Added Car: ", cars);

// Adding an element to beginning of the array
var newLengthOfCar = cars.unshift("Ford");
console.log("Added Car to Beginning: ", cars);
console.log("New Length of Car: ", newLengthOfCar);

// Removing the last element from the array
var lastElementOfCars = cars.pop();
console.log("Removed Car: ", cars);
console.log("Last Element of Cars: ", lastElementOfCars);

// Removing the first element from the array
var removedFirstElementOfCars = cars.shift();
console.log("Removed First Car: ", cars);
console.log("Removesd First Element of Cars: ", removedFirstElementOfCars);

// splice - removes elements from the array
// splice(index, number of elements to remove)
var deletedFruitUsingSplice = fruit.splice(1, 1);
console.log("Removed Fruit: ", fruit);
console.log("Deleted Fruit using Splice: ", deletedFruitUsingSplice);

// splice - adding elements to the array
// splice(index, number of elements to remove, element1, element2, ...)
var addedFruitUsingSplice = fruit.splice(1, 0, "Grapes", "Pineapple");
console.log("Added Fruit: ", fruit);

// sort - sorts the elements in the array by default in ascending order
var sortedFruit = fruit.sort();
console.log("Sorted Fruit: ", sortedFruit);

// reverse - reverses the order of the elements in the array
var reversedFruit = fruit.reverse();
console.log("Reversed Fruit: ", reversedFruit);

// slice - returns a copy of the array
// end index is not included
var slicedFruit = fruit.slice(0, 2);
console.log("Sliced Fruit: ", slicedFruit);

// map method - iterates over each item in the array and performs an operation
var number = [1, 4, 9, 16];
console.log("Numbers: ", number);

var squareOfNumbers = number.map(Math.sqrt);
console.log("Square of Numbers: ", squareOfNumbers);

// length - returns the length of the array
console.log("Length of Number: ", number.length);

// 2D Array
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log("Matrix: ", matrix);
console.log("First Element: ", matrix[0][1]); // 2

// Function Declaration
// A function is a block of code that performs a specific task
// Syntax: function functionName(parameters) { code to be executed }
// functions return a value using the return keyword

function sum(a, b) {
  return a + b;
}

// calling the function
var result = sum(10, 20);

console.log("Sum: ", result);
