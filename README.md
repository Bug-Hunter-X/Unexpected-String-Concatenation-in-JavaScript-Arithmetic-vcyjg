# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion during arithmetic operations.  JavaScript's dynamic typing can lead to unexpected results when mixing numbers and strings in mathematical contexts.

## Bug Description

The `foo` function intends to add two numbers. However, due to JavaScript's loose typing, if one of the arguments is a string, the `+` operator performs string concatenation instead of numerical addition.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (e.g., Node.js, browser console).

## Solution

The `bugSolution.js` file provides a corrected version of the function using explicit type checking or conversion to ensure numerical addition always occurs.