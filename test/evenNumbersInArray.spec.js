const { assertEquals } = require(`../test-framework.js`);
const { evenNumbersInArray } = require(`../src/arrayUtils.js`);

let basket = [];
let expected, actual, result; // All initially undefined

console.log(`Test 1: Test [1, 2, 3, 4, 5, 6] => 3`);
